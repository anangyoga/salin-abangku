"use client";

import {
	Stack,
	Text,
	Container,
	Divider,
	Box,
	Paper,
	ActionIcon,
	Flex,
	Button,
	Tooltip,
	Title,
} from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { Toaster, toast } from "sonner";
import { FiClipboard } from "react-icons/fi";
import { templates } from "@/lib/template";
import { Header } from "@/app/@components/header";

const successToast = [
	"Tercopy abangkuuuhh 🔥🔥",
	"Sudah tercopy abangda 🤝🏼",
	"Tersalin, top kapten 👍🏼👍🏼",
	"Berhasil tercopy 🙌🏼🙌🏼",
	"Tercopy, top abangkuu 🔥🔥💯🔝",
];

export default function PageClient() {
	const clipboard = useClipboard({ timeout: 500 });

	const copied = () => {
		toast.success(
			successToast[Math.floor(Math.random() * successToast.length)],
		);
	};

	return (
		<Container py="lg" size="xs">
			<Toaster richColors position="top-center" />
			<Title
				size="h2"
				style={{
					textAlign: "center",
				}}
			>
				Salin Abangkuuuhh 🫡🔥🔝
			</Title>

			<Stack pt="lg">
				{templates.map((i) => (
					<Paper
						key={i}
						shadow="xs"
						radius="md"
						px="md"
						py="md"
						onClick={() => {
							clipboard.copy(i);
							copied();
						}}
						color="gray"
						style={{
							cursor: "pointer",
							// hover
							transition: "all 0.2s ease",
							"&:hover": {
								transform: "scale(1.02)",
								boxShadow: "0 0 0 1px rgba(0,0,0,0.1)",
							},
						}}
					>
						<Flex justify="space-between">
							<Text>{i}</Text>

							<Tooltip label="Salin">
								<ActionIcon
									variant="default"
									color="gray"
									size="sm"
									aria-label="Copy"
								>
									<FiClipboard />
								</ActionIcon>
							</Tooltip>
						</Flex>
					</Paper>
				))}
			</Stack>

			<Box
				mb="lg"
				pos="fixed"
				bottom="0"
				left="0"
				right="0"
				style={{
					textAlign: "center",
				}}
			>
				<Button
					onClick={() => {
						clipboard.copy(templates.join("\n"));
						copied();
					}}
					radius="md"
					color="teal.9"
				>
					Salin Semua 🤙🏻
				</Button>
			</Box>
		</Container>
	);
}