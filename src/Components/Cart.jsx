import { useContext } from "react";
import { AppContext } from "../Context";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function Cart() {

    const context = useContext(AppContext);

    const increaseQuantity = (id) => {

        context.setShoppingCart(

            context.shoppingCart.map(product =>

                product.id === id

                    ? {
                        ...product,
                        quantity: product.quantity + 1
                    }

                    : product

            )

        );

        context.setCounter(context.counter + 1);
    };

    const decreaseQuantity = (id) => {

        const product = context.shoppingCart.find(p => p.id === id);

        if (product.quantity === 1) {

            removeProduct(id);
            return;
        }

        context.setShoppingCart(

            context.shoppingCart.map(product =>

                product.id === id

                    ? {
                        ...product,
                        quantity: product.quantity - 1
                    }

                    : product

            )

        );

        context.setCounter(context.counter - 1);

    };

    const removeProduct = (id) => {

        const product = context.shoppingCart.find(p => p.id === id);

        context.setCounter(
            context.counter - product.quantity
        );

        context.setShoppingCart(

            context.shoppingCart.filter(

                product => product.id !== id

            )

        );

    };

    const total = context.shoppingCart.reduce(

        (acc, product) =>

            acc + (product.cost * product.quantity),

        0

    );

    if (context.shoppingCart.length === 0) {

        return (

            <div className="w-full flex justify-center mt-20">

                <h1 className="text-3xl font-semibold pt-28">

                    Tu carrito esta vacío 🛒

                </h1>

            </div>

        )

    }

    return (

        <div className="w-full max-w-6xl mx-auto px-8 py-8 ">

            <h1 className="text-4xl font-bold mb-10 pt-28">

                Tu Carrito 🛒

            </h1>

            {

                context.shoppingCart.map(product => (

                    <div

                        key={product.id}

                        className="flex items-center gap-6 border rounded-xl shadow-sm p-5 mb-5"

                    >

                        <img

                            src={`${import.meta.env.BASE_URL}${product.images[0]}`}

                            className="w-32 h-32 object-cover rounded-lg"

                        />

                        <div className="flex-1">

                            <h2 className="text-xl font-semibold">

                                {product.name}

                            </h2>

                            <p className="text-gray-500">

                                Unit Price: {product.currency} {product.cost}

                            </p>

                            <p className="font-semibold mt-2">

                                Subtotal: {product.currency} {product.cost * product.quantity}

                            </p>

                        </div>

                        <div className="flex items-center gap-4">

                            <button

                                onClick={() => decreaseQuantity(product.id)}

                                className="bg-gray-200 w-8 h-8 rounded hover:bg-gray-300"

                            >

                                -

                            </button>

                            <span className="font-bold text-lg">

                                {product.quantity}

                            </span>

                            <button

                                onClick={() => increaseQuantity(product.id)}

                                className="bg-gray-200 w-8 h-8 rounded hover:bg-gray-300"

                            >

                                +

                            </button>

                        </div>

                        <button

                            onClick={() => removeProduct(product.id)}

                            className="text-red-500 hover:text-red-700"

                        >

                            <TrashIcon className="w-7 h-7"/>

                        </button>

                    </div>

                ))

            }

            <div className="border-t mt-10 pt-6 flex justify-end">

                <div className="text-right">

                    <h2 className="text-3xl font-bold">

                        Total

                    </h2>

                    <p className="text-2xl mt-3">

                        USD {total}

                    </p>

                    <button

                        className="mt-6 bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700"

                    >

                        Checkout

                    </button>

                </div>

            </div>

        </div>

    );

}
