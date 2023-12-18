import Article from "../models/articleModel.js";

export const getAllArticles= async (req,res,next) =>{
    try{
        const articles = await Article.findAll()
        if(articles){
              return res.status(200).send(articles);

        }
        else{res.status(404).json({message:'article not found'})}

    }catch(err){
        res.status(500).json({error: err.message})
    }

}

export const getArticleById = async(req,res,next) =>{
    const {articleId} = req.params;

    try{
        const article = await Article.findByPk(articleId)
        if(!article){
            return res.status(404).json({ message: "article not found" });
        }
        res.status(200).json({article:article});
    }catch(err){
        console.log(err);
    }
}


export const deleteArticle = async (req,res,next) =>{
    const {articleId}= req.params;
    
   const deleted =  await Article.destroy({where:{id:articleId}});
    res.status(200).json({message:'article deleted successfully!'})
}



//add
export const addArticle = async (req, res) => {

    if(!req.body.title || !req.body.body || !req.body.author || !req.body.category) {
        res.status(400).json({
            message: 'Please fill all the fields'
        })

        return
    }
    try {
        const image=req.file.path||null
        const {author, title, body, category} = req.body
        const article = await Article.create({author, title, body, category,img:image});
        console.log(article)
        res.status(200).json({  message: "article created successfully" });
    }catch (error) {
   console.log(error)
     res.status(500).json({ message: error.message});
    }
   };

//update
export const updateArticle= async (req,res,next) =>{
    const { articleId} = req.params;
    const img = req.file?.path
    try{
        if(req.body){
            const article=await Article.update({...req.body,img},{where:{id:articleId}});
            return res.status(200).json({message:`article updated successfully!`,article:article});
        }
        res.status(400).json({message:'something went wrong'})

    }catch(err){console.error(err);
    }

}
