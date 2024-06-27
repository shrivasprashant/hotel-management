import React, { useState, useEffect } from "react";
import Admin from "./Admin";

const RoomManagement = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/register/rooms");
      const data = await response.json();
      setRooms(data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };


  const handleEditRoom = async (roomNumber, updatedRoom) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/register/rooms/${roomNumber}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedRoom),
        }
      );
      const data = await response.json();
      setRooms((prevRooms) =>
        prevRooms.map((room) => (room.roomNumber === roomNumber ? data : room))
      );
    } catch (error) {
      console.error("Error editing room:", error);
    }
  };

  const handleDeleteRoom = async (roomNumber) => {
    try {
      await fetch(`http://127.0.0.1:5000/api/register/rooms/${roomNumber}`, {
        method: "DELETE",
      });
      setRooms((prevRooms) =>
        prevRooms.filter((room) => room.roomNumber !== roomNumber)
      );
    } catch (error) {
      console.error("Error deleting room:", error);
    }
  };

  const handleChangeRoomStatus = async (roomNumber, status) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/register/rooms/${roomNumber}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status }),
        }
      );
      const data = await response.json();
      setRooms((prevRooms) =>
        prevRooms.map((room) => (room.roomNumber === roomNumber ? data : room))
      );
    } catch (error) {
      console.error("Error changing room status:", error);
    }
  };

  return (
    <Admin>
      <div className="p-4 space-y-4">

        <div className="bg-zinc-600 p-4 rounded-lg shadow overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="text-center text-white bg-zinc-700">
              <tr>
                <th className="py-2 px-4 border w-24">Room Number</th>
                <th className="py-2 px-4 border w-32">Type</th>
                <th className="py-2 px-4 border w-24">Status</th>
                <th className="py-2 px-4 border w-24">Beds</th>
                <th className="py-2 px-4 border w-16">AC</th>
                <th className="py-2 px-4 border w-48">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => (
                <tr
                  key={room.roomNumber}
                  className="text-center text-white hover:bg-zinc-500"
                >
                  <td className="py-2 px-4 border h-12">{room.roomNumber}</td>
                  <td className="py-2 px-4 border h-12">{room.type}</td>
                  <td className="py-2 px-4 border h-12">{room.status}</td>
                  <td className="py-2 px-4 border h-12">{room.beds}</td>
                  <td className="py-2 px-4 border h-12">{room.ac}</td>
                  <td className="py-2 px-4 border h-12 space-x-2">
                    <button
                      onClick={() => handleEditRoom(room.roomNumber, room)}
                      className="bg-yellow-500 text-white px-2 py-1 my-1 rounded-md"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteRoom(room.roomNumber)}
                      className="bg-red-500 text-white px-2 py-1 my-1 rounded-md"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() =>
                        handleChangeRoomStatus(
                          room.roomNumber,
                          room.status === "available" ? "booked" : "available"
                        )
                      }
                      className="bg-green-500 text-white px-2 py-1 rounded-md"
                    >
                      {room.status === "available" ? "Book" : "Make Available"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Admin>
  );
};

export default RoomManagement;
