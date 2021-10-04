const SimpleLayout = ({ children }) => {
  return (
    <>
      <div>
        <button>login</button>
      </div>
      <div>{children}</div>
    </>
  )
}

export default SimpleLayout
