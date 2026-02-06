import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../model/auth.model.js";
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "Hamma fieldlar majburiy",
            });
        }
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({
                message: "Bu email allaqachon ro'yxatdan o'tgan",
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            role: "user",
        });
        const userResponse = user.toJSON();
        delete userResponse.password;
        res.status(201).json({
            message: "User created",
            user: userResponse,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Register error",
            error: error instanceof Error ? error.message : "Unknown error"
        });
    }
};
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Email va password majburiy",
            });
        }
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({
                message: "Email yoki parol noto'g'ri"
            });
        }
        const userPassword = user.getDataValue('password');
        if (!userPassword) {
            return res.status(500).json({
                message: "Server error: Password not found"
            });
        }
        const isCorrect = await bcrypt.compare(password, userPassword);
        if (!isCorrect) {
            return res.status(401).json({
                message: "Email yoki parol noto'g'ri"
            });
        }
        const token = jwt.sign({
            id: user.getDataValue('id'),
            email: user.getDataValue('email'),
            role: user.getDataValue('role') || 'user'
        }, process.env.JWT_SECRET, { expiresIn: "1d" });
        const userResponse = user.toJSON();
        delete userResponse.password;
        res.json({
            message: "Login successful",
            token,
            user: userResponse
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Login error",
            error: error instanceof Error ? error.message : "Unknown error"
        });
    }
};
//# sourceMappingURL=auth.controller.js.map