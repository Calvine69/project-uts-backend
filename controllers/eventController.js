const Event = require('../models/Event');

// CREATE: Tambah satu atau banyak event
exports.createEvent = async (req, res) => {
  try {
    const data = Array.isArray(req.body) ? req.body : [req.body];
    const result = await Event.insertMany(data);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ: Ambil semua event dengan filter optional
exports.getAllEvents = async (req, res) => {
  try {
    const { 
      name, 
      subtitle, 
      eligibility, 
      rewards, 
      active 
    } = req.query;

    let filter = {};

    // Filter berdasarkan nama
    if (name) {
      filter.name = { $regex: name, $options: 'i' };
    }

    // Filter berdasarkan subtitle
    if (subtitle) {
      filter.subtitle = { $regex: subtitle, $options: 'i' };
    }

    // Filter berdasarkan eligibility
    if (eligibility) {
      filter.eligibility = { $regex: eligibility, $options: 'i' };
    }

    // Filter berdasarkan rewards
    if (rewards) {
      filter.rewards = { $elemMatch: { name: { $regex: rewards, $options: 'i' } } };
    }

    // Filter berdasarkan status aktif
    if (active === 'true') {
      const now = new Date();
      filter.durationStart = { $lte: now };  // Event harus sudah dimulai
      filter.durationEnd = { $gte: now };    // Event harus masih berlangsung
    }

    const events = await Event.find(filter);
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ: Ambil event berdasarkan ID
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE: Ubah data event berdasarkan ID
exports.updateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.status(200).json(updatedEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE: Hapus event berdasarkan ID
exports.deleteEvent = async (req, res) => {
  try {
    const deleted = await Event.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE ALL: Hapus semua event
exports.deleteAllEvents = async (req, res) => {
  try {
    await Event.deleteMany({});
    res.status(200).json({ message: 'All events deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
