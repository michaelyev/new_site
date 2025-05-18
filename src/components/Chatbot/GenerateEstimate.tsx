// @ts-nocheck
/*eslint-disable*/

"use client";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./GenerateEstimate.module.css";

export const GenerateEstimate = () => {
	const [prompt, setPrompt] = useState("");
	const [estimate, setEstimate] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setLoading(true);
		setEstimate(null);
		setError(null);

		try {
			const response = await fetch("/api/generate-estimate", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ prompt }),
			});

			const data = await response.json();
			if (response.ok) {
				setEstimate(data.result);
			} else {
				setError(data.error);
			}
		} catch (error) {
			setError("Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<section id="ai_estimate" className="container scroll-anchor">
			<div
				className={` ${styles.aiSection} component-mb relative flex flex-col items-center rounded-3xl p-10 shadow-lg ${styles.animateFadeIn}`}
			>
				<h2
					className={`custom-heading ${styles.animatePulse} first-letter:text-main-yellow`}
				>
					Get an AI Estimate
				</h2>
				<form onSubmit={handleSubmit} className="inside-mb">
					<textarea
						className={styles.textArea}
						value={prompt}
						onChange={(e) => setPrompt(e.target.value)}
						placeholder="Describe your project..."
						rows={4}
						cols={70}
					></textarea>
					<br />
					<Button
						variant="secondary"
						className="mt-5 container flex justify-center"
						type="submit"
						disabled={loading}
					>
						{loading ? (
							<div className={styles.spinner}>
								<div className={styles.bounce1}></div>
								<div className={styles.bounce2}></div>
								<div className={styles.bounce3}></div>
							</div>
						) : (
							"Get Estimate"
						)}
					</Button>
				</form>
			</div>
			{error && <p className={styles.errorText}>{error}</p>}
			{loading && (
				<div className={styles.loadingContainer}>
					<h3>Generating your estimate...</h3>
					<div className={styles.loadingAnimation}></div>
				</div>
			)}
			{estimate && (
				<div
					className={`container ${styles.resultSection} component-mb`}
				>
					<h2 className={styles.textTitle}>Your Estimate</h2>
					<div className={styles.estimateBox}>
						<ReactMarkdown className={styles.markdown}>
							{estimate}
						</ReactMarkdown>
					</div>
				</div>
			)}
		</section>
	);
};
