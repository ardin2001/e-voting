import Image from "next/image"
import { FaStar } from "react-icons/fa";

export default function CardProduct({product}:any) {
    return (
        <div className="card bg-base-100 drop-shadow-strong p-2 bg-white">
            <div className="card-body grid gap-1 relative">
                <div className="rating flex gap-1 px-1.5 py-0.5 bg-white rounded-md absolute right-2 top-2 border-2 border-secondary">
                    <FaStar className="text-secondary text-xl" />
                    <p className="text-secondary font-medium">{product.rating}</p>
                </div>
                <Image src={product.image} alt={product.name} width={5000} height={5000} className="h-48 md:h-52 xl:h-56 object-cover" />
            </div>
        </div>
    )
}