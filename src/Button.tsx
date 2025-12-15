type buttonPropsType = {
    title: string,
}

export const Button = (props: buttonPropsType) => {
    return (
        <button>{props.title}</button>
    );
};
