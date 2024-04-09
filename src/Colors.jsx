export default function({colors}) {
    const li = colors.map((e) => {
        return <li style={{color: e}}>Hello</li>
    })

    return <div><ul>{li}</ul></div>;
}