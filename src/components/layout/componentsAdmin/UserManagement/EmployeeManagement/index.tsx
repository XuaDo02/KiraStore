import { useState, useEffect } from "react";
import axios from "axios";
import { EmployeeData } from "../../../../../types/employeedata";

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState<EmployeeData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<EmployeeData[]>(
          "https://6615003e2fc47b4cf27db117.mockapi.io/employee"
        );
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" relative h-35px ">
      <div className="grid grid-cols-12 text-customGrayLight text-center items-center w-full text-xs py-3">
        <div className="grid col-span-5 grid-cols-7">
          <div className="col-span-2">Mã nhân viên</div>
          <div className="col-span-2">Họ và tên</div>
          <div className="col-span-2">Ngày sinh</div>
          <div className="col-span-1">Giới tính</div>
        </div>
        <div className="grid col-span-5 grid-cols-6">
          <div className="col-span-2">Email</div>
          <div className="col-span-1">Số điện thoại</div>
          <div className="col-span-2">Địa chỉ</div>
          <div className="col-span-1">Chức vụ</div>
        </div>
        <div className="grid col-span-2 ">
          <div className="col-span-1">Hành động</div>
        </div>
      </div>
      <div>
        {employees.map((employee, index) => (
          <div
            key={employee.id}
            className={`grid grid-cols-12 text-white text-center items-center w-full text-xs py-2 ${index % 2 === 0 ? `bg-customDark3` : `bg-customDark2`
              }`}
          >
            <div className="grid col-span-5 grid-cols-7">
              <div className="col-span-2">{employee.id}</div>
              <div className="col-span-2">{employee.UserName}</div>
              <div className="col-span-2">{new Date(employee.DateOfBirth).toLocaleDateString()}</div>
              <div className="col-span-1">{employee.Gender}</div>
            </div>
            <div className="grid col-span-5 grid-cols-6">
              <div className="col-span-2">{employee.Email}</div>
              <div className="col-span-1">{employee.Phone}</div>
              <div className="col-span-2">{employee.Address}</div>
              <div className="col-span-1">{employee.Position}</div>
            </div>
            <div className="grid col-span-2 grid-cols-2">
              <button className="col-span-1 flex items-center justify-center">
                <img src="/imgEmployee/Edit.png" className="w-5 h-5 mr-1" /> Sửa
              </button>
              <button className="col-span-1 flex items-center justify-center">
                <img src="/imgEmployee/delete.png" className="w-5 h-5 mr-1" /> Xoá
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeManagement;
