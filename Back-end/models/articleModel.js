import sequelize from "../config/dbconfig.js";
import { DataTypes } from "sequelize";

const Article= sequelize.define("article", {

    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false,
    },
   
}, {
    freezeTableName: true,
});
Article.sync()
// Sync the model with the database

// Article.sync();

export default Article;