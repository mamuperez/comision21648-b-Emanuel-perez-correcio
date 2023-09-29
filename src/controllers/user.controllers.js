const { PostModel } = require("../model/Posts");

const getAllPosts = async (req, res) => {
  const allPosts = await PostModel.findAll();
  res.render("index", { allPosts });
};

const formCreateNewPost = async (req, res) => {
  res.render("new-post");
};

const formUpdatePost = async (req, res) => {
  const postId = req.params.id;
  const post = await PostModel.findByPk(postId);

  if (!post) {
    return res.redirect("/posts");
  }

  res.render("update-post", { post });
};


const createPost = async (req, res) => {
  const { title, content, imageUrl } = req.body;
  await PostModel.create({ title, content, imageUrl});
  res.redirect("/posts");
};

const updatePost = async (req, res) => {
  const { id, title, content, imageUrl } = req.body;
  const post = await PostModel.findByPk(id);
  await post.update({ title, content, imageUrl });
  res.redirect("/posts");
};

const deletePost = async (req, res) => {
  const postId = req.params.id;
  const post = await PostModel.findByPk(postId);
  await post.destroy();
  res.redirect("/posts");
};

module.exports = {
  getAllPosts,
  formCreateNewPost,
  createPost,
  formUpdatePost,
  updatePost,
  deletePost,
};
