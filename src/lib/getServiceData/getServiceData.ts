export const getServicesData = async (params: any): Promise<any> => {
	const res = await fetch(
	  `${process.env.NEXT_PUBLIC_BACKEND_URL}/servicesnew/${params.services}`,
	);
  
	if (!res.ok) {
	  throw new Error("Failed to fetch data");
	}
  
	const data = await res.json();
  
	// Если данные приходят как массив, берем первый элемент
	if (Array.isArray(data)) {
	  return data[0];
	}
  
	return data;
  };
  