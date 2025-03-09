import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: 'https://cdn-icons-png.flaticon.com/128/8864/8864212.png',
        name: 'fashion'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/3374/3374448.png',
        name: 'home decor'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/3514/3514242.png',
        name: 'grocery'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/3659/3659899.png',
        name: 'electronics'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/1024/1024541.png',
        name: 'personal care'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/1702/1702342.png',
        name: 'kids'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/2349/2349820.png',
        name: 'gifting'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/128/1930/1930026.png',
        name: 'stationery'
    }
]

const Category = () => {
    // navigate 
    const navigate = useNavigate();
    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    {/* Image  */}
                                    <div onClick={() => navigate(`/category/${item.name}`)} className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-pink-500 transition-all hover:bg-pink-400 cursor-pointer mb-1 " >
                                        <div className="flex justify-center mb-12">
                                            {/* Image tag  */}
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
        </div>
    );
}

export default Category;