import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
    const servicesCenter = useLoaderData();
    const [type, setType] = useState("document");
    const { user } = useAuth();

    const {
        register,
        handleSubmit,
        control,
    } = useForm();

    const selectedDivision = useWatch({ control, name: "senderRegion" });
    const receiverDivision = useWatch({ control, name: "receiverRegion" });

    const getDistrictsByRegion = (region) => {
        return servicesCenter
            .filter((item) => item.region === region)
            .map((item) => item.district);
    };

    const uniqueRegions = [...new Set(servicesCenter.map((item) => item.region))];

    const calculatePriceWithBreakdown = (parcelType, weight, isWithinCity) => {
        weight = Number(weight);
        let base = 0;
        let extraWeightCharge = 0;
        let extraCharge = 0;
        let total = 0;
        let breakdown = "";

        if (parcelType === "document") {
            base = isWithinCity ? 60 : 80;
            total = base;
            breakdown = `Base Price: ৳${base}`;
        } else if (parcelType === "non-document") {
            if (weight <= 3) {
                base = isWithinCity ? 110 : 150;
                total = base;
                breakdown = `Base Price (Up to 3kg): ৳${base}`;
            } else {
                const extraWeight = weight - 3;
                base = isWithinCity ? 110 : 150;
                extraWeightCharge = extraWeight * 40;
                extraCharge = isWithinCity ? 0 : 40;
                total = base + extraWeightCharge + extraCharge;

                breakdown = `
          Base Price (First 3kg): ৳${base}<br/>
          Extra Weight (${extraWeight}kg × ৳40): ৳${extraWeightCharge}<br/>
          ${!isWithinCity ? `Outside City Extra: ৳${extraCharge}<br/>` : ""}
        `;
            }
        }

        return { total, breakdown };
    };

    const isWithinCity = (senderRegion, receiverRegion) => {
        return senderRegion && receiverRegion && senderRegion === receiverRegion;
    };

    const onSubmit = (data) => {
        const parcelType = type;
        const weight = data.parcelWeight;
        const withinCity = isWithinCity(data.senderRegion, data.receiverRegion);

        const { total, breakdown } = calculatePriceWithBreakdown(parcelType, weight, withinCity);

        Swal.fire({
            title: "Parcel Price Breakdown",
            html: `
        <p><strong>Parcel Type:</strong> ${parcelType === "document" ? "Document" : "Non-Document"}</p>
        <p><strong>Weight:</strong> ${weight} kg</p>
        <p><strong>Delivery Area:</strong> ${withinCity ? "Within City" : "Outside City/District"}</p>
        <hr class="my-2" />
        ${breakdown}
        <hr class="my-2" />
        <p><strong>Total: ৳${total}</strong></p>
      `,
            icon: "info",
            showCancelButton: true,
            confirmButtonText: "Confirm",
            cancelButtonText: "Edit",
        }).then((result) => {
            if (result.isConfirmed) {
                 const trackingId = `TRK-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Date.now()}`;
                if (result.isConfirmed) {
                    const finalData = {
                        ...data,
                        cost: total,
                        created_by: user.email,
                        trackingId,
                        payment_status: 'unpaid',
                        delivary_status: 'not_collected',
                        creation_date: new Date().toISOString(),
                    };
                    console.log("Final Submitted Data:", finalData);
                    // reset()
                };
            } else {
                console.log("User chose to edit.");
            }
        });
    };

    return (
        <div className="max-w-6xl my-8 mx-auto bg-white p-10 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold text-center text-[#013220] mb-6">Add Parcel</h2>
            <hr className="mb-6" />

            {/* Parcel Type */}
            <div className="flex items-center justify-center gap-10 mb-8">
                <label className="flex items-center  gap-2 cursor-pointer text-[#013220]">
                    <input
                        type="radio"
                        value="document"
                        checked={type === "document"}
                        onChange={() => setType("document")}
                    />
                    <span>Document</span>
                </label>
                <label className="flex items-center  gap-2 cursor-pointer text-[#013220]">
                    <input
                        type="radio"
                        value="non-document"
                        checked={type === "non-document"}
                        onChange={() => setType("non-document")}
                    />
                    <span>Non-Document</span>
                </label>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Parcel Info */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col justify-center items-center">
                        <label className="mb-1 font-medium text-[#013220]">Parcel Name</label>
                        <input placeholder="Enter parcel name" {...register("parcelName", { required: true })} className="input input-bordered" />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <label className="mb-1 font-medium text-[#013220]">Parcel Weight (KG)</label>
                        <input type="number" step="0.01" min="0" placeholder="Enter weight in KG" {...register("parcelWeight", { required: true })} className="input input-bordered" />
                    </div>
                </div>

                {/* Sender and Receiver Details */}
                <div className="grid grid-cols-2 gap-8">
                    {/* Sender */}
                    <div className="pr-6 border-r border-gray-300 space-y-4">
                        <h3 className="text-lg font-semibold mb-4 text-[#013220]">Sender Details</h3>
                        <div className="grid md:grid-cols-2 gap-2">
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium text-[#013220]">Sender Name</label>
                                <input placeholder="Sender's full name" {...register("senderName", { required: true })} className="input input-bordered" />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium text-[#013220]">Your Region</label>
                                <select className="select select-bordered" {...register("senderRegion")}>
                                    <option value="">Select your region</option>
                                    {uniqueRegions.map((region) => (
                                        <option key={region} value={region}>{region}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium text-[#013220]">Sender Pickup Warehouse</label>
                                <select {...register("pickupWarehouse", { required: true })} className="select select-bordered">
                                    <option value="">Select Warehouse</option>
                                    {(getDistrictsByRegion(selectedDivision) || []).map((district) => (
                                        <option key={district} value={district}>{district}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium text-[#013220]">Sender Address</label>
                                <input placeholder="Sender address" {...register("senderAddress", { required: true })} className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 font-medium text-[#013220]">Sender Contact No</label>
                            <input placeholder="Mobile number" {...register("senderContact", { required: true })} className="input input-bordered w-full" />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 font-medium text-[#013220]">Pickup Instruction</label>
                            <textarea placeholder="Any pickup instruction" {...register("pickupInstruction")} className="textarea textarea-bordered w-full" />
                        </div>
                    </div>

                    {/* Receiver */}
                    <div className="pl-6 space-y-4">
                        <h3 className="text-lg font-semibold mb-4 text-[#013220]">Receiver Details</h3>
                        <div className="grid md:grid-cols-2 gap-2">
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium text-[#013220]">Receiver Name</label>
                                <input placeholder="Receiver's full name" {...register("receiverName", { required: true })} className="input input-bordered" />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium text-[#013220]">Receiver Region</label>
                                <select className="select select-bordered" {...register("receiverRegion")}>
                                    <option value="">Select your region</option>
                                    {uniqueRegions.map((region) => (
                                        <option key={region} value={region}>{region}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium text-[#013220]">Receiver Delivery Warehouse</label>
                                <select {...register("deliveryWarehouse", { required: true })} className="select select-bordered">
                                    <option value="">Select Warehouse</option>
                                    {(getDistrictsByRegion(receiverDivision) || []).map((district) => (
                                        <option key={district} value={district}>{district}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium text-[#013220]">Receiver Address</label>
                                <input placeholder="Receiver address" {...register("receiverAddress", { required: true })} className="input input-bordered" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 font-medium text-[#013220]">Receiver Contact No</label>
                            <input placeholder="Mobile number" {...register("receiverContact", { required: true })} className="input input-bordered w-full" />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1 font-medium text-[#013220]">Delivery Instruction</label>
                            <textarea placeholder="Any delivery instruction" {...register("deliveryInstruction")} className="textarea textarea-bordered w-full" />
                        </div>
                    </div>
                </div>

                {/* Extra for Non-Document */}
                {type === "non-document" && (
                    <div className="bg-gray-100 p-6 rounded-md">
                        <h3 className="text-lg font-semibold mb-4 text-[#013220]">Extra Details for Non-Document Parcel</h3>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium text-[#013220]">Item Type</label>
                                <input placeholder="Item type" {...register("itemType")} className="input input-bordered w-full" />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1 font-medium text-[#013220]">Declared Value (৳)</label>
                                <input placeholder="Value in Taka" {...register("declaredValue")} className="input input-bordered w-full" />
                            </div>
                        </div>
                    </div>
                )}

                <p className="text-sm text-gray-500">* PickUp Time 4pm–7pm Approx.</p>

                <div>
                    <button type="submit" className="btn bg-lime-500 text-white hover:bg-lime-600 px-6">
                        Proceed to Confirm Booking
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SendParcel;
