
import Message from '../model/messege.model.js';
import Conversation from '../model/conversation.model.js';

export const createMessage = async (req, res) => {
  try {
    const { conversation, sender, content } = req.body;

   
    const conv = await Conversation.findById(conversation);
    if (!conv) {
      return res.status(404).json({ error: 'Conversation not found' });
    }

    const newMessage = new Message({
      conversation,
      sender,
      content,
    });

    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get messages for a specific conversation
export const getMessagesByConversation = async (req, res) => {
  try {
    const { conversationId } =  req.query;

    const messages = await Message.find({ conversation: conversationId }).populate('sender', 'name');
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a message (e.g., mark as read)
export const updateMessage = async (req, res) => {
  try {
    const { messageId } = req.params;
    const updates = req.body;

    const updatedMessage = await Message.findByIdAndUpdate(messageId, updates, { new: true });
    if (!updatedMessage) {
      return res.status(404).json({ error: 'Message not found' });
    }

    res.status(200).json(updatedMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a message
export const deleteMessage = async (req, res) => {
  try {
    const { messageId } = req.params;

    const deletedMessage = await Message.findByIdAndDelete(messageId);
    if (!deletedMessage) {
      return res.status(404).json({ error: 'Message not found' });
    }

    res.status(200).json({ message: 'Message deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
