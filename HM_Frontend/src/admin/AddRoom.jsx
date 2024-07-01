import React, { useState, useEffect } from "react";
import Admin from "./Admin";

const AddRoom = () => {
  const [rooms, setRooms] = useState([]);
  const [newRoom, setNewRoom] = useState({
    roomNumber: "",
    type: "",
    status: "",
    beds: "",
    ac: "",
    amount:"",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/api/register/rooms");
      const data = await response.json();
      setRooms(data);
    } catch (error) {
      setError("Error fetching rooms");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRoom({ ...newRoom, [name]: value });
  };

  const addRoom = async () => {
    try {
      await fetch("http://127.0.0.1:5000/api/register/rooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRoom),
      });
      fetchRooms();
      setNewRoom({
        roomNumber: "",
        type: "",
        status: "",
        beds: "",
        ac: "",
        amount:"",
      });
    } catch (error) {
      setError("Error adding room");
    }
  };

  return (
    <Admin>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Room Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="roomNumber"
            placeholder="Room Number"
            value={newRoom.roomNumber}
            onChange={handleInputChange}
            className="p-2 border rounded-md"
          />
          <select
            name="type"
            value={newRoom.type}
            onChange={handleInputChange}
            className="p-2 border rounded-md"
          >
            <option value="">Room Type</option>
            <option value="Deluxe Room">Deluxe Room</option>
            <option value="Suite">Suite</option>
            <option value="Standard Room">Standard Room</option>
            <option value="Family Room">Family Room</option>
          </select>
          <select
            name="status"
            value={newRoom.status}
            onChange={handleInputChange}
            className="p-2 border rounded-md"
          >
            <option value="">Room Status</option>
            <option value="available">Available</option>
            <option value="booked">Booked</option>
            <option value="maintenance">Maintenance</option>
          </select>
          <input
            type="number"
            name="beds"
            placeholder="Beds"
            value={newRoom.beds}
            onChange={handleInputChange}
            className="p-2 border rounded-md"
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={newRoom.amount}
            onChange={handleInputChange}
            className="p-2 border rounded-md"
          />
          <select
            name="ac"
            value={newRoom.ac}
            onChange={handleInputChange}
            className="p-2 border rounded-md"
          >
            <option value="">AC</option>
            <option value="AC">AC</option>
            <option value="None Ac">None Ac</option>
          </select>
        </div>
        <button
          onClick={addRoom}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md"
        >
          Add Room
        </button>
        {loading && <p className="mt-4">Loading...</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Room List</h3>
          <div className="grid grid-cols-1 gap-4">
            {rooms.map((room) => (
              <div
                key={room.roomNumber}
                className="p-4 border rounded-md shadow"
              >
                <p>
                  <strong>Room Number:</strong> {room.roomNumber}
                </p>
                <p>
                  <strong>Type:</strong> {room.type}
                </p>
                <p>
                  <strong>Status:</strong> {room.status}
                </p>
                <p>
                  <strong>Beds:</strong> {room.beds}
                </p>
                <p>
                  <strong>AC:</strong> {room.ac}
                </p>
                <p>
                  <strong>AMOUNT:</strong> {room.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Admin>
  );
};

export default AddRoom;
