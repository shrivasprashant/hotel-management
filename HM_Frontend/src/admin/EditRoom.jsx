import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Admin from "../admin/Admin";

const EditRoom = () => {
  const { roomNumber } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/api/register/rooms/${roomNumber}`);
        const data = await response.json();
        setRoom(data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching room details");
        setLoading(false);
      }
    };

    fetchRoomDetails();
  }, [roomNumber]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoom((prevRoom) => ({
      ...prevRoom,
      [name]: value,
    }));
  };

  const updateRoom = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/register/rooms/${roomNumber}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(room),
      });
      const data = await response.json();
      navigate("/admin/manageroom");
    } catch (error) {
      setError("Error updating room");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Admin>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Edit Room</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="roomNumber"
            placeholder="Room Number"
            value={room.roomNumber}
            onChange={handleInputChange}
            className="p-2 border rounded-md"
            readOnly
          />
          <select
            name="type"
            value={room.type}
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
            value={room.status}
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
            value={room.beds}
            onChange={handleInputChange}
            className="p-2 border rounded-md"
          />
          <select
            name="ac"
            value={room.ac}
            onChange={handleInputChange}
            className="p-2 border rounded-md"
          >
            <option value="">AC</option>
            <option value="AC">AC</option>
            <option value="None AC">None AC</option>
          </select>
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={room.amount}
            onChange={handleInputChange}
            className="p-2 border rounded-md"
          />
        </div>
        <button
          onClick={updateRoom}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md"
        >
          Update Room
        </button>
        {loading && <p className="mt-4">Loading...</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>
    </Admin>
  );
};

export default EditRoom;
