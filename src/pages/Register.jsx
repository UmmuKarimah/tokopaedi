import React from 'react'
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar';
import { Navigate } from 'react-router-dom';

export default function Register() {
    const {
        register, //daftarin field di form
        handleSubmit, //saat klik submit diapakan
        watch, //melihat perubahan nilai, confirm password
        reset, //reset form
        formState: { errors },
    } = useForm();

    const password = watch('password');
    const onSubmit = (data) => {
        console.log(data);
        alert("Data berhasil didaftarkan");
        Navigate('/');
    }

  return (
    <>

    <br></br>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Form Register</h2>

        {/* Nama */}
        <div className="mb-4">
            <label className="block mb-1 font-medium md:text-left">Nama</label>
            <input
            type="text"
            {...register("nama", { required: "Nama harus diisi" })}
            className="w-full px-3 py-2 border rounded "
            />
            {errors.nama && (<p className="text-red-500 md:text-left">{errors.nama.message}</p>)}
        </div>
        {/* Username */}
        <div className="mb-4">
            <label className="block mb-1 font-medium md:text-left">Username</label>
            <input
            type="text"
            {...register("username", { required: "Username harus diisi" })}
            className="w-full px-3 py-2 border rounded"
            />
            {errors.username && (<p className="text-red-500 md:text-left">{errors.username.message}</p>)}
        </div>
        {/* Password */}
        <div className="mb-4">
            <label className="block mb-1 font-medium md:text-left">Password</label>
            <input
            type="password"
            {...register("password", { required: "Password harus diisi" })}
            className="w-full px-3 py-2 border rounded"
            />
            {errors.password && (<p className="text-red-500 md:text-left">{errors.password.message}</p>)}
        </div>
        {/* Ulangi Password */}
        <div className="mb-4">
            <label className="block mb-1 font-medium md:text-left">Ulangi Password</label>
            <input
            type="password"
            {...register("ulangiPassword", { required: "Ulangi Password harus diisi",
                validate: (value) => value === password || "Password tidak cocok",
            })}
            className="w-full px-3 py-2 border rounded"
            />
            {errors.ulangiPassword && (<p className="text-red-500 md:text-left">{errors.ulangiPassword.message}</p>)}
        </div>
        {/* Email */}
        <div className="mb-4">
        <label className="block mb-1 font-medium md:text-left">Email</label>
        <input
            type="email"
            {...register("email", { 
            required: "Email harus diisi",
            pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Format email tidak valid"
            }
        })}
        className="w-full px-3 py-2 border rounded"
        />
        {errors.email && (<p className="text-red-500 md:text-left">{errors.email.message}</p>)}
        </div>

        {/* Telephone */}
        <div className="mb-4">
    <label className="block mb-1 font-medium md:text-left">Nomor Telepon</label>
    <input
        type="text"
        {...register("telephone", { 
            required: "Nomor Telepon harus diisi",
            pattern: {
                value: /^[+]?[0-9]{1,4}?[ ]?[-\s]?[0-9]{1,3}?[ ]?[-\s]?[0-9]{4,10}$/,
                message: "Format nomor telepon tidak valid"
            },
            minLength: {
                value: 10,
                message: "Nomor telepon harus memiliki minimal 10 karakter"
            },
            maxLength: {
                value: 13,
                message: "Nomor telepon harus memiliki maksimal 13 karakter"
            },
        })}
        className="w-full px-3 py-2 border rounded"
    />
    {errors.telephone && (<p className="text-red-500 md:text-left">{errors.telephone.message}</p>)}
</div>
        {/* Foto */}
        <div className="mb-4">
    <label className="block mb-1 font-medium md:text-left">Foto</label>
    <input
        type="file"
        accept="image/*" // Only allow image files
        {...register("foto", { 
            required: "Foto harus diupload",
            validate: {
                // Validate file type (only image files)
                imageType: (file) => file && file[0] && file[0].type.startsWith("image/")
                    ? true 
                    : "Hanya file gambar yang diperbolehkan (JPEG, PNG, JPG, dll.)",
                // Validate file size (5MB max)
                fileSize: (file) => file && file[0] && file[0].size <= 5 * 1024 * 1024
                    ? true 
                    : "Ukuran file tidak boleh lebih dari 5MB",
            }
        })}
        className="w-full px-3 py-2 border rounded"
    />
    {errors.foto && (<p className="text-red-500 md:text-left">{errors.foto.message}</p>)}
</div>
        {/* button register */}
        <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Daftar
        </button>
    </form>
    </>
  )
}
