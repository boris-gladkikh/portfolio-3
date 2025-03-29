// import React, { useEffect, useState } from 'react';
// import './GeishaMask.css';

// const asciiString = `
// // ....................................................................................................
// // ....................................................................................................
// // ....................................................................................................
// // ....................................................................................................
// // ........................:::::::::::::::::::::::::::::::::::::::::::::::::::.........................
// // ......................--:::::::::::::::::::::::::::::::::::::::::::::::::----.......................
// // .....................--:::::::::::::::::::::::::::::::::::::::::::::::::::::--:.....................
// // ....................--:::::::::::::::::::::::::::::::::::::::::::::::::::::::--.....................
// // ...................:-:::::::::::::::::::::::::::::::::::::::::::::::::::::::::--....................
// // ..................:--:::::::::::::::::::::::::::::::::::::::::::::::::::::::::---...................
// // ..................--:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-=:..................
// // .................:=-:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::---..................
// // .................-=-::::::..::::::::::::::::::::::::::::::::::::::::::::::::::::--..................
// // ................:=-::::::...::.:::::::::::::::::::::::::::::::::::::::::::::::::-=:.................
// // ................-=-:::::..:=***####+:::::::::::::::::::::::::::-=+***+-:::::::::--=.................
// // ................-=-:::::+#*++====+*%@@#=:::::::::::::::::::-+%@@%**+++++*+-::::::-=:................
// // ...............:=-::::++::::::::::::-=%@@+:::::::::::::::-#@@*--::::::::::-*=::::-=-................
// // ...............:=-:::::::::::::::-------+#=-:::::::::----%*-------:::::::::::-:::-=-................
// // ...............:=-:::::::::------------------:::::::::-------------::--::::::::::-==................
// // ...............==-:::--=+*###**###%%%#+=----:::::::::::-----=*%%%%######+=--:::::--=:...............
// // ...............=-==---=*%%#*++++++*#%%%%#+-:::::::::::::-=#%%%%%%##***###%%%*--:---=:...............
// // ..............:=--+-:::---*@@@@@@@@@@##%%%*:::::::::::::*%%%##%@@@@@@@%#+----=--+=-=:...............
// // ..............:=---*++=====*@@@@%@@@@@@+-#*:::::::::::::*%=+@@@@@@@@@@@@*-:::-+#=:-=:...............
// // ..............:=-=-:=****#%#=--=++++=---==:::::::::::::::----=*#%###+==*%#*****-:--=-...............
// // ...............=--+-::=*****####%%%%%%%%#*-:::::::::::::-#%%%%%%%%%#####**#*+-::=--=:...............
// // ...............==-=#-::::-+*********#*+=+-:::::::::::::::-+*+#%%%###******=::::*+:==:...............
// // ...............-=-:=#*-::::::+#######--=--:::::::::::::::-=+-=#######*-:::::-+#=:-==................
// // ...............:==-::+****++*#######**+::::::::::::::::::::=**#######*=:-=+*##-:--==................
// // ...............:===:::-+*****#*+=-:::::::::::::::::::::::::::::-=+*####*****=::--=+:................
// // ................===--::=*+**+-::::::::::::::::::::::::::::::::::::::-+***++=:::--=+.................
// // ................-+=-=::-***-::::::::-::::::::::::::::::::::::--::::::::+***-::-===-.................
// // ................:+=-=-:-*#-::::::--:::::::---::-----:----::::::---::::::+**:-:-==+:.................
// // .................=====--*#:::::::::::::::-=%@*=======#@#=-::::::::---:::=#*:=--===..................
// // .................:=====-**:::::::::::::::--=+**-==-=#*+---::::::::::::::-#+:=====-..................
// // ..................==-=+-**:::::....::::::::::::----:::::::::::::::::::::-#=-=-===:..................
// // ..................-==-+=+#::::::::::::::::::::::--::::::::::::::::::::::=#-=-=-==...................
// // ..................:==--=+#--::::::::..::::::::::::::::::::::::::::::::--=*==-===....................
// // ...................-==-=-#=--:-::::::::::::::-=-:::-=-:::::::::::::-----+*-==-=-....................
// // ....................==---*+=-----:::::::::+%%%%%%%%%%%%#-:::::::::----=+*===-=-.....................
// // ....................:==--=*--===---::::=*%%%%%%%%%%%%%%%%*-::::----===--*-+===:.....................
// // .....................-=---*--::--++=+#%%%%@%%%@@@@@@@@@@%%%%#+==+=-----=+=-==:......................
// // ......................-=--=+---::---+*#%###%%%%%%%%%%%%%##%##*+--::----#====:.......................
// // .......................-==-+----------::-=+***%%%%%%#***+=-:----------==-==:........................
// // ........................-=-=+--------:-----===+++++++==---------------=-==:.........................
// // .........................:====------------++--=----====+-------------===-:..........................
// // ...........................-==-------------+*--------+*-------------===-............................
// // ............................:-=---------:::-*=---=--=#--:-----------=-..............................
// // ..............................:===-----:::::+*::----*+::::-------==-................................
// // .................................-==---:::::+*--==--*+-:::----===:..................................
// // ....................................==------*+------+*------==-.....................................
// // ......................................-=---=*=--==--=#=---=-:.......................................
// // ........................................:++*++=======+*++:..........................................
// // ............................................:-======-:..............................................
// // ....................................................................................................
// // ....................................................................................................
// // `;

// const asciiGrid = asciiString.trim().split('\n').map(row => row.split(''));

// const charToClass = {
//   '.': null,
//   ':': 'plus faint',
//   '-': 'plus dim',
//   '=': 'plus shadow',
//   '*': 'plus bright',
//   '#': 'plus white',
//   '+': 'plus highlight',
//   '%': 'plus bold',
//   '@': 'plus red',
// };

// const GeishaMask = () => {
//   const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
//   const [clickState, setClickState] = useState(0);
//   const [scatterData, setScatterData] = useState([]);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const handleClick = (e) => {
//     if (clickState === 0) {
//       const clickX = e.clientX;
//       const clickY = e.clientY;
//       const scatter = [];
//       asciiGrid.forEach((row, rowIndex) => {
//         row.forEach((char, colIndex) => {
//           if (charToClass[char]) {
//             const x = colIndex * 10 + window.innerWidth * 0.2;
//             const y = rowIndex * 16 + 40;
//             const dx = x - clickX;
//             const dy = y - clickY;
//             const dist = Math.sqrt(dx * dx + dy * dy) || 1;
//             const speed = 3 + Math.random() * 2;
//             scatter.push({
//               row: rowIndex,
//               col: colIndex,
//               x,
//               y,
//               vx: (dx / dist) * speed,
//               vy: (dy / dist) * speed,
//             });
//           }
//         });
//       });
//       setScatterData(scatter);
//       setClickState(1);
//     } else if (clickState === 1) {
//       setClickState(2);
//     } else {
//       setClickState(0);
//       setScatterData([]);
//     }
//   };

//   useEffect(() => {
//     if (clickState !== 1) return;
//     const interval = setInterval(() => {
//       setScatterData(prev =>
//         prev.map(p => ({
//           ...p,
//           x: p.x + p.vx,
//           y: p.y + p.vy
//         }))
//       );
//     }, 30);
//     return () => clearInterval(interval);
//   }, [clickState]);

//   return (
//     <div className="top-cont" onClick={handleClick}>
//       <div className="ascii-grid">
//         {asciiGrid.map((row, rowIndex) =>
//           row.map((char, colIndex) => {
//             const className = charToClass[char];
//             if (!className) return null;

//             const scatter = scatterData.find(s => s.row === rowIndex && s.col === colIndex);

//             const baseLeft = colIndex * 10;
//             const baseTop = rowIndex * 16;
//             let left = baseLeft + window.innerWidth * 0.2;
//             let top = baseTop + 40;

//             let transform = 'translate(0, 0)';

//             if (clickState === 1 || clickState === 2) {
//               left = scatter?.x ?? left;
//               top = scatter?.y ?? top;
//             } else {
//               const dx = mousePos.x - (baseLeft + window.innerWidth * 0.2);
//               const dy = mousePos.y - baseTop;
//               const distance = Math.sqrt(dx * dx + dy * dy);
//               const repelRadius = 200;
//               if (distance < repelRadius) {
//                 const force = (repelRadius - distance) / repelRadius;
//                 const offsetX = -dx * force * 0.6;
//                 const offsetY = -dy * force * 0.6;
//                 transform = `translate(${offsetX}px, ${offsetY}px)`;
//               }
//             }

//             return (
//               <div
//                 key={`${rowIndex}-${colIndex}`}
//                 className={className}
//                 style={{
//                   left: `${left}px`,
//                   top: `${top}px`,
//                   transform
//                 }}
//               >+</div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// };

// export default GeishaMask;

import React, { useEffect, useState } from 'react';
import './GeishaMask.css';

const asciiString = `
// ....................................................................................................
// ....................................................................................................
// ....................................................................................................
// ....................................................................................................
// ........................:::::::::::::::::::::::::::::::::::::::::::::::::::.........................
// ......................--:::::::::::::::::::::::::::::::::::::::::::::::::----.......................
// .....................--:::::::::::::::::::::::::::::::::::::::::::::::::::::--:.....................
// ....................--:::::::::::::::::::::::::::::::::::::::::::::::::::::::--.....................
// ...................:-:::::::::::::::::::::::::::::::::::::::::::::::::::::::::--....................
// ..................:--:::::::::::::::::::::::::::::::::::::::::::::::::::::::::---...................
// ..................--:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-=:..................
// .................:=-:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::---..................
// .................-=-::::::..::::::::::::::::::::::::::::::::::::::::::::::::::::--..................
// ................:=-::::::...::.:::::::::::::::::::::::::::::::::::::::::::::::::-=:.................
// ................-=-:::::..:=***####+:::::::::::::::::::::::::::-=+***+-:::::::::--=.................
// ................-=-:::::+#*++====+*%@@#=:::::::::::::::::::-+%@@%**+++++*+-::::::-=:................
// ...............:=-::::++::::::::::::-=%@@+:::::::::::::::-#@@*--::::::::::-*=::::-=-................
// ...............:=-:::::::::::::::-------+#=-:::::::::----%*-------:::::::::::-:::-=-................
// ...............:=-:::::::::------------------:::::::::-------------::--::::::::::-==................
// ...............==-:::--=+*###**###%%%#+=----:::::::::::-----=*%%%%######+=--:::::--=:...............
// ...............=-==---=*%%#*++++++*#%%%%#+-:::::::::::::-=#%%%%%%##***###%%%*--:---=:...............
// ..............:=--+-:::---*@@@@@@@@@@##%%%*:::::::::::::*%%%##%@@@@@@@%#+----=--+=-=:...............
// ..............:=---*++=====*@@@@%@@@@@@+-#*:::::::::::::*%=+@@@@@@@@@@@@*-:::-+#=:-=:...............
// ..............:=-=-:=****#%#=--=++++=---==:::::::::::::::----=*#%###+==*%#*****-:--=-...............
// ...............=--+-::=*****####%%%%%%%%#*-:::::::::::::-#%%%%%%%%%#####**#*+-::=--=:...............
// ...............==-=#-::::-+*********#*+=+-:::::::::::::::-+*+#%%%###******=::::*+:==:...............
// ...............-=-:=#*-::::::+#######--=--:::::::::::::::-=+-=#######*-:::::-+#=:-==................
// ...............:==-::+****++*#######**+::::::::::::::::::::=**#######*=:-=+*##-:--==................
// ...............:===:::-+*****#*+=-:::::::::::::::::::::::::::::-=+*####*****=::--=+:................
// ................===--::=*+**+-::::::::::::::::::::::::::::::::::::::-+***++=:::--=+.................
// ................-+=-=::-***-::::::::-::::::::::::::::::::::::--::::::::+***-::-===-.................
// ................:+=-=-:-*#-::::::--:::::::---::-----:----::::::---::::::+**:-:-==+:.................
// .................=====--*#:::::::::::::::-=%@*=======#@#=-::::::::---:::=#*:=--===..................
// .................:=====-**:::::::::::::::--=+**-==-=#*+---::::::::::::::-#+:=====-..................
// ..................==-=+-**:::::....::::::::::::----:::::::::::::::::::::-#=-=-===:..................
// ..................-==-+=+#::::::::::::::::::::::--::::::::::::::::::::::=#-=-=-==...................
// ..................:==--=+#--::::::::..::::::::::::::::::::::::::::::::--=*==-===....................
// ...................-==-=-#=--:-::::::::::::::-=-:::-=-:::::::::::::-----+*-==-=-....................
// ....................==---*+=-----:::::::::+%%%%%%%%%%%%#-:::::::::----=+*===-=-.....................
// ....................:==--=*--===---::::=*%%%%%%%%%%%%%%%%*-::::----===--*-+===:.....................
// .....................-=---*--::--++=+#%%%%@%%%@@@@@@@@@@%%%%#+==+=-----=+=-==:......................
// ......................-=--=+---::---+*#%###%%%%%%%%%%%%%##%##*+--::----#====:.......................
// .......................-==-+----------::-=+***%%%%%%#***+=-:----------==-==:........................
// ........................-=-=+--------:-----===+++++++==---------------=-==:.........................
// .........................:====------------++--=----====+-------------===-:..........................
// ...........................-==-------------+*--------+*-------------===-............................
// ............................:-=---------:::-*=---=--=#--:-----------=-..............................
// ..............................:===-----:::::+*::----*+::::-------==-................................
// .................................-==---:::::+*--==--*+-:::----===:..................................
// ....................................==------*+------+*------==-.....................................
// ......................................-=---=*=--==--=#=---=-:.......................................
// ........................................:++*++=======+*++:..........................................
// ............................................:-======-:..............................................
// ....................................................................................................
// ....................................................................................................
// `;

const asciiGrid = asciiString.trim().split('\n').map(row => row.split(''));

const charToClass = {
  '.': null,
  ':': 'plus faint',
  '-': 'plus dim',
  '=': 'plus shadow',
  '*': 'plus bright',
  '#': 'plus white',
  '+': 'plus highlight',
  '%': 'plus bold',
  '@': 'plus red',
};

const GeishaMask = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [clickState, setClickState] = useState(0);
  const [scatterData, setScatterData] = useState([]);
  const [gridOffset, setGridOffset] = useState(window.innerWidth * 0.2);

  useEffect(() => {
    const handleResize = () => setGridOffset(window.innerWidth * 0.2);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleClick = (e) => {
    if (clickState === 0) {
      const clickX = e.clientX;
      const clickY = e.clientY;

      const scatter = [];
      asciiGrid.forEach((row, rowIndex) => {
        row.forEach((char, colIndex) => {
          if (charToClass[char]) {
            const x = colIndex * 10 + gridOffset;
            const y = rowIndex * 16 + 40;
            const dx = x - clickX;
            const dy = y - clickY;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            const speed = 3 + Math.random() * 2;
            scatter.push({
              row: rowIndex,
              col: colIndex,
              x,
              y,
              vx: (dx / dist) * speed,
              vy: (dy / dist) * speed,
            });
          }
        });
      });
      setScatterData(scatter);
      setClickState(1);
    } else if (clickState === 1) {
      setClickState(2);
    } else {
      setClickState(0);
      setScatterData([]);
    }
  };

  useEffect(() => {
    if (clickState !== 1) return;
    const interval = setInterval(() => {
      setScatterData((prev) =>
        prev.map((p) => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
        }))
      );
    }, 30);
    return () => clearInterval(interval);
  }, [clickState]);

  return (
    <div className="top-cont" onClick={handleClick}>
      <div className="ascii-grid">
        {asciiGrid.map((row, rowIndex) =>
          row.map((char, colIndex) => {
            const className = charToClass[char];
            if (!className) return null;

            const scatter = scatterData.find(
              (s) => s.row === rowIndex && s.col === colIndex
            );

            const baseLeft = colIndex * 10;
            const baseTop = rowIndex * 16;
            let left = baseLeft + gridOffset;
            let top = baseTop + 40;
            let transform = 'translate(0, 0)';

            if (clickState === 1 || clickState === 2) {
              left = scatter?.x ?? left;
              top = scatter?.y ?? top;
            } else {
              const dx = mousePos.x - (baseLeft + gridOffset);
              const dy = mousePos.y - baseTop;
              const distance = Math.sqrt(dx * dx + dy * dy);
              const repelRadius = 200;
              if (distance < repelRadius) {
                const force = (repelRadius - distance) / repelRadius;
                const offsetX = -dx * force * 0.6;
                const offsetY = -dy * force * 0.6;
                transform = `translate(${offsetX}px, ${offsetY}px)`;
              }
            }

            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={className}
                style={{
                  left: `${left}px`,
                  top: `${top}px`,
                  transform,
                }}
              >
                +
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default GeishaMask;
