
export const FlexBox = ({children, column, style})=>{
    return (
        <div className={`flex ${column ? "flex-col":"flex-row"  } ${style}`}>
            {children}
        </div>
    )
}

