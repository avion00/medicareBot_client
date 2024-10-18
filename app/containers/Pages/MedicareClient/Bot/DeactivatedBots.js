import React, { useEffect, useState } from 'react';
import botsData from './ActiveBotsData.json';

const DeactivatedBots = () => {
  const [bots, setBots] = useState([]);
  const [deactivatedBots, setDeactivatedBots] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    setBots(botsData);
    const inactiveBots = botsData.filter((bot) => bot.status === 'Inactive');
    setDeactivatedBots(
      inactiveBots.map((bot) => ({
        name: bot.name,
        deactivationDate: bot.deactivationDate || 'Unknown Date',
      }))
    );
  }, []);

  const handleReactivate = (name) => {
    setDeactivatedBots((prevDeactivated) => prevDeactivated.filter((bot) => bot.name !== name));
    localStorage.setItem('botsData', JSON.stringify(bots)); // Update local storage
  };

  const handleCheckboxChange = (name) => {
    setCheckedItems((prev) => {
      if (prev.includes(name)) {
        return prev.filter((item) => item !== name);
      }
      return [...prev, name];
    });
  };

  const handleSelectAllChange = () => {
    if (selectAll) {
      setCheckedItems([]);
    } else {
      const allNames = deactivatedBots.map((bot) => bot.name);
      setCheckedItems(allNames);
    }
    setSelectAll((prev) => !prev);
  };

  const handleReactivateAll = () => {
    checkedItems.forEach((name) => handleReactivate(name));
    setCheckedItems([]);
    setSelectAll(false);
  };

  return (
    <section className="deactivated-bots">
      <h2 style={{
        marginBottom: '1.5em',
        fontSize: '1.25em',
        fontFamily: 'Inter, sans-serif',
        fontWeight: '800',
        backgroundColor: 'rgb(2, 3, 220, .5)',
        padding: '.75em 1em',
        borderRadius: '.5em',
      }}
      >Deactivated Bots</h2>
      <div className="deactivated-container" style={{
        border: '1px solid rgb(125, 125, 125, 0.2)',
        boxShadow: '2px 2px 50px 2px rgb(125, 125, 125, 0.2)',
        borderRadius: '.75em',
        padding: '0',
        margin: '0 .7em',
      }}>
        <h3 style={{
          padding: '.75em 1.25em',
          backgroundColor: 'rgb(125, 125, 125, 0.2)',
          borderRadius: '.5em .5em 0 0',
          display: 'flex',
          alignItems: 'center',
          gap: '.5em'
        }}>
          <input
            type="checkbox"
            checked={selectAll}
            onChange={handleSelectAllChange}
            style={{
              width: '.8em',
              height: '.8em',
            }}
          />
          Select All Deactivated Bots
        </h3>
        <ul className="deactivated-list" style={{
          padding: '0 1em',
          display: 'flex',
          flexDirection: 'column',
          // gap: '.25em',
        }}>
          {deactivatedBots.map((bot, index) => (
            <li
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '.75em',
                padding: '.4em .65em',
                borderBottom: '1px solid rgba(125, 125, 125, 0.5)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(125, 125, 125, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'inherit';
              }}
            >
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '.75em',
                cursor: 'pointer'
              }}>
                <input
                  type="checkbox"
                  checked={checkedItems.includes(bot.name)}
                  onChange={() => handleCheckboxChange(bot.name)}
                  style={{
                    width: '.9em',
                    height: '.9em',
                  }}
                />
                {bot.name} - Deactivated on {bot.deactivationDate}
              </label>
            </li>
          ))}
        </ul>
        <button className="reactivate-bot" onClick={handleReactivateAll}
          style={{
            margin: '1em 1em 1.5em 2.25em',
            padding: '.65em 1.5em',
            backgroundColor: 'rgba(0, 100, 250, .5)'
          }}
        >
          Reactivate Selected Bots
        </button>
      </div>
    </section>
  );
};

export default DeactivatedBots;
