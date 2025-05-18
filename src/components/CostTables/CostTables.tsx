// @ts-nocheck
/* eslint-disable */

"use client";

import React, { useState } from "react";
import { data } from "@/constants/costData/costTable";
import {
	costHeading,
	locationNames,
} from "@/constants/costKeywords/costKeywords";

export const cityCostIndices = {
	victoria: 1.0,
	oak_bay: 1.1,
	saanich: 1.05,
	sidney: 1.04,
	colwood: 1.03,
	metchosin: 1.02,
	north_saanich: 1.06,
};

const getCostMultiplier = (city) =>
	cityCostIndices[city.toLowerCase()] || cityCostIndices["seattle"];

export const CostTables = ({ category = null, city = "seattle" }) => {
	const [selectedCategory, setSelectedCategory] = useState(category);
	const [showAll, setShowAll] = useState(false);

	const costMultiplier = getCostMultiplier(city);

	// Multiplier function to adjust costs
	const applyMultiplier = (value, multiplier) => {
		if (typeof value === "string" && value.includes("$")) {
			if (value.includes("-")) {
				const [minValue, maxValue] = value
					.split("-")
					.map((v) => v.trim());
				const minNumber = parseFloat(
					minValue.replace(/[^0-9.-]+/g, ""),
				);
				const maxNumber = parseFloat(
					maxValue.replace(/[^0-9.-]+/g, ""),
				);
				return `$${Math.round(minNumber * multiplier)} - $${Math.round(
					maxNumber * multiplier,
				)}`;
			}
			const numberValue = parseFloat(value.replace(/[^0-9.-]+/g, ""));
			return `$${Math.round(numberValue * multiplier)}`;
		}
		return value;
	};

	const handleServiceClick = (serviceCategory) => {
		setSelectedCategory(serviceCategory);
	};

	const handleCloseClick = () => {
		setSelectedCategory(null);
	};

	const handleToggleShowAll = () => {
		setShowAll(!showAll);
	};

	const displayedServices = showAll
		? data.all_services
		: data.all_services.slice(0, 4);
	const selectedServiceData = data.all_services.find(
		(service) => service.category === selectedCategory,
	);

	return (
		<section
			id="cost_table"
			className="component-mb scroll-anchor container mx-auto p-6 bg-gradient-to-br from-blue-900 to-teal-400 rounded-2xl shadow-lg"
		>
			{/* Heading */}
			<h2 className="text-center text-white text-3xl mb-6">
				{selectedCategory
					? costHeading[selectedCategory]
					: "Remodeling Costs"}
				{city && ` in ${locationNames[city] || city}`}
			</h2>

			{/* Category Selector */}
			<div className="flex overflow-x-auto mb-4">
				<button
					onClick={() => setSelectedCategory(null)}
					className={`px-4 py-2 text-sm font-bold rounded ${
						selectedCategory === null
							? "bg-black text-white"
							: "bg-white"
					}`}
				>
					All Services
				</button>
				{data.all_services.map((service, index) => (
					<button
						key={index}
						onClick={() => handleServiceClick(service.category)}
						className={`px-4 py-2 text-sm ${
							selectedCategory === service.category
								? "bg-black text-white"
								: "bg-white"
						}`}
					>
						{service.project}
					</button>
				))}
			</div>

			{/* Selected Service Table */}
			<div className="overflow-x-auto">
				{selectedCategory && selectedServiceData ? (
					<>
						<h3 className="text-xl text-white text-center mb-4">
							{selectedServiceData.project}
						</h3>
						<table className="table-auto min-w-full bg-white rounded-lg">
							<thead className="bg-blue-500 text-white">
								<tr>
									<th className="px-4 py-2">Service</th>
									<th className="px-4 py-2">Cost Range</th>
									<th className="px-4 py-2">Average Cost</th>
									<th className="px-4 py-2">Labor Cost</th>
									<th className="px-4 py-2">Material Cost</th>
								</tr>
							</thead>
							<tbody>
								{selectedServiceData.details.map(
									(detail, index) => (
										<tr key={index} className="border-t">
											<td className="px-4 py-2 whitespace-normal">
												{detail.service}
											</td>
											<td className="px-4 py-2">
												{applyMultiplier(
													detail.cost_range,
													costMultiplier,
												)}
											</td>
											<td className="px-4 py-2">
												{applyMultiplier(
													detail.average_cost,
													costMultiplier,
												)}
											</td>
											<td className="px-4 py-2">
												{applyMultiplier(
													detail.labor_cost,
													costMultiplier,
												)}
											</td>
											<td className="px-4 py-2">
												{applyMultiplier(
													detail.material_cost,
													costMultiplier,
												)}
											</td>
										</tr>
									),
								)}
							</tbody>
						</table>
						<div className="flex justify-center mt-4">
							<button
								onClick={handleCloseClick}
								className="px-4 py-2 bg-red-500 text-white rounded"
							>
								Close
							</button>
						</div>
					</>
				) : (
					<>
						{/* General Service Table */}
						<table className="table-auto min-w-full bg-white rounded-lg">
							<thead className="bg-blue-500 text-white">
								<tr>
									<th className="px-4 py-2">Project</th>
									<th className="px-4 py-2">Size</th>
									<th className="px-4 py-2">Cost Range</th>
									<th className="px-4 py-2">Average Cost</th>
								</tr>
							</thead>
							<tbody>
								{displayedServices.map((service, index) => (
									<tr key={index} className="border-t">
										<td className="px-4 py-2">
											{service.project}
										</td>
										<td className="px-4 py-2">
											{service.size}
										</td>
										<td className="px-4 py-2">
											{applyMultiplier(
												service.total_cost_range,
												costMultiplier,
											)}
										</td>
										<td className="px-4 py-2">
											{applyMultiplier(
												service.average_cost,
												costMultiplier,
											)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<div className="flex justify-center mt-4">
							<button
								onClick={handleToggleShowAll}
								className="px-4 py-2 bg-blue-500 text-white rounded"
							>
								{showAll ? "Show Less" : "Show More"}
							</button>
						</div>
					</>
				)}
			</div>
		</section>
	);
};
