import React from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
    // Страница конкретного пользователя

    const { id } = useParams();
    return <div>{id}</div>;
};

export default UserPage;
