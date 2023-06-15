

const NotFound = () => {
    const onClick = () => {
        window.open(
            `exbodyKiosk:?type=1&_id=63bcca54a22db800df35443e&usridx=420&weeks=1&daysAWeek=1`
          );
    }
    return (
        <div>
            <p>test</p>
            <button onClick={onClick}>런처 연결</button>
        </div>
    )
}

export default NotFound;