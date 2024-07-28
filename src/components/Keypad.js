export default function Keypad({ usedKeys }) {

    const qwertyRows = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ];

    return (
        <div className="keypad">
            {qwertyRows.map((row, rowIndex) => (
                <div className="keypad-row" key={rowIndex}>
                    {row.map(key => {
                        const color = usedKeys[key];
                        return (
                            <div className={`key ${color}`} key={key}>{key}</div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}