
interface FlagIconProps {
    countryCode: string;
  }
  
  export default function FlagIcon({ countryCode }: FlagIconProps) {
    return <span className={`fi fib fi-${countryCode} text-6xl`}></span>;
  }