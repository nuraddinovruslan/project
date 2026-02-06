export const adminMiddleware = (req, res, next) => {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: "User topilmadi" });
    }
    if (user.role.toUpperCase() !== "ADMIN") {
        return res.status(403).json({ message: "Faqat admin uchun" });
    }
    next();
};
//# sourceMappingURL=admin.middleware.js.map