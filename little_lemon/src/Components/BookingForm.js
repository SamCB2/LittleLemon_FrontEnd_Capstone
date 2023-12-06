import React,  { useState} from 'react';

function BookingForm({availableTimes, updateTimes}) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('17:00');
  const [numOfGuests, setnumOfGuests] = useState(1);
  const [selectedOccasion, setselectedOccasion] = useState('Birthday');

  const Times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  return (
    <>
    <form style={{display:'grid', maxWidth: '200px', gap: '20px'}}>
    <label for="res-date">Choose date</label>
    <input
    type="date"
    id="res-date"
    value={selectedTime}
    onChange={(e) => setSelectedTime(e.target.value)}
    />
    <label for="res-time">Choose time</label>
    <select
    id="res-time"
    value={selectedDate}
    onChange={(e) => {setSelectedDate(e.target.value); updateTimes(e.target.value)}}
    >
      {Times.map((time) => (
        <option key={time} value={time}>{time}</option>
      ))}
    </select>
    <label for="guests">Number of guests</label>
    <input
    type="number"
    placeholder="1"
    min="1"
    max="10"
    id="guests"
    value={numOfGuests}
    onChange={(e) => setnumOfGuests(e.target.value)}
    />
    <label for="occasion">Occasion</label>
    <select
    id="occasion"
    value={selectedOccasion}
    onChange={setselectedOccasion}
    >
        <option>Birthday</option>
        <option>Anniversary</option>
    </select>
    <input type="submit" value="Make Your reservation"/>
    </form>
    </>
  );
}

export default BookingForm;