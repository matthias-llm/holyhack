const Analytics = () => {
	return (
		<div className="flex flex-col">
			<div className="flex flex-row">
				<p>Maand</p>
			</div>

		</div>
	);
}

export default Analytics;

// def makeexcel():
// 	array = []
// 	for i in range(2003):
// 			array.append(random.randint(10,90))
// 	workbook = xlsxwriter.Workbook("/Users/matthiasmonden/Documents/data.xlsx")
// 	worksheet = workbook.add_worksheet()
// 	for i in range(2003):
// 			worksheet.write("A" + str(i), array[i])
// 	workbook.close()