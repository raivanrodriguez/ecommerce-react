import Layout from "../../Components/Layout/Layout";
import { useEffect, useState } from "react";


const MyAccount = () => {
	const usuario = JSON.parse(localStorage.getItem("datos_ingresados"));

    const [profile, setProfile] = useState({
        firstName: "",
        firstSurname: "",
        secondName: "",
        secondSurname: "",
        phone: "",
        email: usuario?.dato1 || ""
    });

    const [image, setImage] = useState(
        localStorage.getItem("imagenPerfil") || "/img/img_perfil.png"
    );

    const [saved, setSaved] = useState(false);

    useEffect(() => {

        const perfilGuardado = JSON.parse(localStorage.getItem("perfil"));

        if (perfilGuardado) {

            setProfile({
                firstName: perfilGuardado.profile.dato0,
                firstSurname: perfilGuardado.profile.dato1,
                secondName: perfilGuardado.profile.dato2,
                secondSurname: perfilGuardado.profile.dato3,
                phone: perfilGuardado.profile.dato4,
                email: perfilGuardado.profile.dato5
            });

        }

    }, []);

    const handleChange = (e) => {

        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        const profileStorage = {

            dato0: profile.firstName,
            dato1: profile.firstSurname,
            dato2: profile.secondName,
            dato3: profile.secondSurname,
            dato4: profile.phone,
            dato5: profile.email

        };

        localStorage.setItem(
            "perfil",
            JSON.stringify({ profile: profileStorage })
        );

        setSaved(true);

        setTimeout(() => {

            setSaved(false);

        }, 2500);

    };

    const handleImage = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = () => {

            localStorage.setItem("imagenPerfil", reader.result);

            setImage(reader.result);

        };

        reader.readAsDataURL(file);

    };
	return (
		<Layout>
			<div className="max-w-5xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-8">

            <h1 className="text-4xl font-bold mb-8">
                My Profile
            </h1>

            {saved && (

                <div className="mb-6 rounded-lg bg-green-100 text-green-700 p-4">

                    Profile saved successfully!

                </div>

            )}

            <div className="grid md:grid-cols-3 gap-10">

                <div className="flex flex-col items-center">

                    <img

                        src={image}

                        alt="Profile"

                        className="w-48 h-48 rounded-full object-cover border shadow"

                    />

                    <input

                        type="file"

                        accept="image/*"

                        onChange={handleImage}

                        className="mt-5"

                    />

                </div>

                <form

                    onSubmit={handleSubmit}

                    className="md:col-span-2 grid grid-cols-2 gap-5"

                >

                    <div>

                        <label className="font-medium">
                            First Name
                        </label>

                        <input

                            required

                            name="firstName"

                            value={profile.firstName}

                            onChange={handleChange}

                            className="mt-1 w-full rounded border p-2"

                        />

                    </div>

                    <div>

                        <label className="font-medium">
                            First Surname
                        </label>

                        <input

                            required

                            name="firstSurname"

                            value={profile.firstSurname}

                            onChange={handleChange}

                            className="mt-1 w-full rounded border p-2"

                        />

                    </div>

                    <div>

                        <label className="font-medium">
                            Second Name
                        </label>

                        <input

                            name="secondName"

                            value={profile.secondName}

                            onChange={handleChange}

                            className="mt-1 w-full rounded border p-2"

                        />

                    </div>

                    <div>

                        <label className="font-medium">
                            Second Surname
                        </label>

                        <input

                            name="secondSurname"

                            value={profile.secondSurname}

                            onChange={handleChange}

                            className="mt-1 w-full rounded border p-2"

                        />

                    </div>

                    <div>

                        <label className="font-medium">
                            Phone
                        </label>

                        <input

                            required

                            type="tel"

                            name="phone"

                            value={profile.phone}

                            onChange={handleChange}

                            className="mt-1 w-full rounded border p-2"

                        />

                    </div>

                    <div>

                        <label className="font-medium">
                            Email
                        </label>

                        <input

                            required

                            type="email"

                            name="email"

                            value={profile.email}

                            onChange={handleChange}

                            className="mt-1 w-full rounded border p-2"

                        />

                    </div>

                    <div className="col-span-2">

                        <button

                            className="mt-4 w-full rounded-lg bg-indigo-600 py-3 text-white font-semibold hover:bg-indigo-700 transition"

                        >

                            Save Changes

                        </button>

                    </div>

                </form>

            </div>

        </div>

    

		</Layout>
	);
}

export default MyAccount;