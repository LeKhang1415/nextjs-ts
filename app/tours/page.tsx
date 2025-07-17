import Image from "next/image";
import Link from "next/link";

const url = "https://www.course-api.com/react-tours-project";

type Tour = {
    id: string;
    name: string;
    info: string;
    image: string;
    price: string;
};

async function ToursPage() {
    const response = await fetch(url);
    const data: Tour[] = await response.json();
    return (
        <div className="grid md:grid-cols-2 gap-8">
            {data.map((tour) => {
                return (
                    <Link
                        key={tour.id}
                        href={`/tours/${tour.id}`}
                        className="hover:text-blue-500"
                    >
                        <div className="relative h-48 mb-2">
                            <Image
                                src={tour.image}
                                alt={tour.name}
                                fill
                                sizes="33vw"
                                // sizes='(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw'
                                priority
                                className="object-cover rounded"
                            />
                        </div>
                        <h2>{tour.name}</h2>
                    </Link>
                );
            })}
        </div>
    );
}

export default ToursPage;
