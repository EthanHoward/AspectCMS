import theme  from "@/util/theme";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center" style={{backgroundColor: theme.bg}}>
      <div className="w-full h-8 flex flex-row items-center justify-center" style={{backgroundColor: theme.bg2}}>
        <div className="p-2 flex flex-row items-center justify-center" style={{color: theme.primary}}>
          <p className="text-xl font-bold">ASPECT:</p>
          <p className="text-xl font-bold">CMS</p>
        </div>
        <div className="flex-grow">
          
        </div>
      </div>
      <div className="w-full flex-grow">
        
      </div>
    </div>
  );
}
