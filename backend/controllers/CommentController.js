import CommentModel from "../models/Comment.js";

export const getCommentsByPost = async (req, res) => {
  try {
    const postId = req.params.postId;

    const comments = await CommentModel.find({ post: postId })
      .populate("user") // Чтобы подтянуть информацию о пользователе
      .exec();

    res.json(comments);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить комментарии",
    });
  }
};

export const addComment = async (req, res) => {
  try {
    console.log(req.body);

    const { postId, text } = req.body;

    // Создаем новый комментарий
    const comment = new CommentModel({
      text,
      user: req.userId, // Предполагаем, что идентификатор пользователя берется из токена
      post: postId,
    });

    await comment.save();

    res.json(comment);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось добавить комментарий",
    });
  }
};
