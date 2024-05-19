import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";
export default function Dashboard() {
    const [data, setData] = useState<any>();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://localhost:7115/api/Order/GetDashboard"
                );
                if (response && response.status == 200) {
                    let { data } = response;
                    let dashBoard: [string, any][] = [
                        ["THÁNG", "Doanh Thu"]
                    ];
                    for(let i = 1; i <= 12; i++) {
                        let month = data.find((m: any) => { return m.month == i });
                        if (month) {
                            dashBoard.push([`Tháng ${i}`, month.price]);
                        }
                        else {
                            dashBoard.push([`Tháng ${i}`, 0]);
                        }
                    }
                    setData(dashBoard);
                }
                else {
                    let dashBoard: [string, any][] = [
                        ["THÁNG", "Doanh Thu"]
                    ];
                    for(let i = 1; i <= 12; i++) {
                        dashBoard.push([`Tháng ${i}`, 0]);
                    }
                    setData(dashBoard);
                }
            } catch (error) {
                console.error("Error fetching order data:", error);
            }
        };
        fetchData();
    }, []);
    return <>
        <div className="relative h-35px">
            <div className="text-base text-customWhite border-customYellow bg-gradient-to-t from-customGrayDark to-customDark2">
                <h1 className="py-4 pl-5">THỐNG KÊ DOANH THU</h1>
            </div>
            <div className="">
                <hr className="border-t border-neutral-600 w-full" />
            </div>
            <div className="grid grid-cols-8 text-customGrayLight text-center items-center w-full text-xs py-3">
                <div className="grid col-span-8">
                    <Chart
                        chartType="Bar"
                        width="100%"
                        height="400px"
                        data={data}
                    />
                </div>
            </div>
        </div>
    </>
}