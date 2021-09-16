interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({color, onClick}: ChildProps) => {
  return <div> {color}
  <button onClick={onClick}>Click Me</button>
  </div>
}

export const ChildASFC: React.FC<ChildProps> = ({color, onClick, children}) => {
  return <div>{color}
    <button onClick={onClick}>Click Me</button>
    {children}
  </div>
}

