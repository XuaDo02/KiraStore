import { useState, useEffect } from "react";
import axios from "axios";
import { EmployeeData } from "../../../../../types/employeedata";
import DialogEditEmployee from "./DialogEditEmployee";
import DialogAddEmployee from "./DialogAddEmployee";
import DialogDeleteEmployee from "./DialogDelete";
import { toast } from "react-toastify";

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState<EmployeeData[]>([]);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeData | null>(null);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleteEmployee, setDeleteEmployee] = useState<EmployeeData | null>(null);

  //LIST EMPLOYEE START
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<EmployeeData[]>(
          "https://localhost:7115/api/User/role/Nh%C3%A2n%20Vi%C3%AAn"
        );
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };
    fetchData();
  }, []);
  //LIST EMPLOYEE END

  const handleAddClick = () => {
    setShowAddDialog(true); // Hiển thị DialogAddEmployee khi bấm vào nút "Thêm mới nhân viên"
  };

  const handleAddEmployee = (newEmployee: EmployeeData) => {
    setEmployees([...employees, newEmployee]);
    setShowAddDialog(false);
  };

  const handleEditClick = (employee: EmployeeData) => {
    setSelectedEmployee(employee);
    setShowEditDialog(true);
  };

  // HÀM XOÁ + XOÁ API START
  const handleDeleteClick = (employee: EmployeeData) => {
    setDeleteEmployee(employee);
    setShowDeleteDialog(true);
  };

  const handleDeleteEmployee = async () => {
    if (deleteEmployee) {
      try {
        await axios.delete(`https://localhost:7115/api/User/${deleteEmployee.id}`);
        const updatedEmployees = employees.filter(emp => emp.id !== deleteEmployee.id);
        setEmployees(updatedEmployees);
        setShowDeleteDialog(false);
        toast.success("Xoá thành công!");
      } catch (error) {
        console.error("Error deleting employee:", error);
        // toast.error("Có lỗi xảy ra khi xoá nhân viên!");
      }
    }
  };
  // HÀM XOÁ API END

  // HÀM UPDATE API START
  const handleUpdateEmployee = async (updatedEmployee: EmployeeData) => {
    try {
      // Cập nhật thông tin nhân viên trên API
      await updateEmployeeOnAPI(updatedEmployee);

      // Tìm kiếm và cập nhật nhân viên trong mảng employees
      const updatedEmployees = employees.map(emp => {
        if (emp.id === updatedEmployee.id) {
          return updatedEmployee;
        }
        return emp;
      });
      setEmployees(updatedEmployees);
      setShowEditDialog(false); // Đóng dialog sau khi đã cập nhật xong
    } catch (error) {
      console.error("Error updating employee:", error);
      toast.error("Cập nhật thông tin nhân viên thất bại!");
    }
  };

  // Hàm gửi yêu cầu cập nhật thông tin nhân viên lên API
  const updateEmployeeOnAPI = async (updatedEmployee: EmployeeData) => {
    try {
      await axios.put(`https://localhost:7115/api/User/${updatedEmployee.id}`, updatedEmployee);
    } catch (error) {
      console.error("Error updating employee:", error);
      toast.error("Cập nhật thông tin nhân viên thất bại!");
    }
  };
  // HÀM UPDATE API END

  return (
    <>
      <div className="relative h-35px">
        <div className="h-16 pb-5 pt-4 pr-8 flex justify-end">
          <button
            className="w-36 h-8 text-sm bg-customYellow rounded-md text-black font-semibold"
            onClick={handleAddClick}
          >
            Thêm mới nhân viên
          </button>
        </div>
        <div className="">
          <hr className="border-t border-neutral-600 w-full" />
        </div>
        <div className="grid grid-cols-12 text-customGrayLight text-center items-center w-full text-xs py-3">
          <div className="grid col-span-5 grid-cols-7">
            <div className="col-span-2">Mã nhân viên</div>
            <div className="col-span-2">Họ và tên</div>
            <div className="col-span-2">Địa chỉ</div>
            <div className="col-span-1">Giới tính</div>
          </div>
          <div className="grid col-span-5 grid-cols-6">
            <div className="col-span-2">Email</div>
            <div className="col-span-2">Số điện thoại</div>
            <div className="col-span-1">Chức vụ</div>
            <div className="col-span-1">Mật khẩu</div>
          </div>
          <div className="grid col-span-2 ">
            <div className="col-span-1">Hành động</div>
          </div>
        </div>
        <div>
          {employees.map((employee, index) => (
            <div
              key={employee.id}
              className={`grid grid-cols-12 text-white text-center items-center w-full text-xs py-2 ${index % 2 === 0 ? `bg-customDark3` : `bg-customDark2`}`}
            >
              <div className="grid col-span-5 grid-cols-7">
                <div className="col-span-2">{employee.id}</div>
                <div className="col-span-2">{employee.userName}</div>
                <div className="col-span-2">{employee.address}</div>
                <div className="col-span-1">{employee.gender}</div>
              </div>
              <div className="grid col-span-5 grid-cols-6">
                <div className="col-span-2">{employee.email}</div>
                <div className="col-span-2">{employee.phone}</div>
                <div className="col-span-1">{employee.role}</div>
                <div className="col-span-1">{employee.password}</div>
              </div>
              <div className="grid col-span-2 grid-cols-2">
                <button className="col-span-1 flex items-center justify-center" onClick={() => handleEditClick(employee)}>
                  <img src="/imgEmployee/Edit.png" className="w-5 h-5 mr-1" alt="Edit" /> Sửa
                </button>
                {/* Delete button */}
                <button className="col-span-1 flex items-center justify-center" onClick={() => handleDeleteClick(employee)}>
                  <img src="/imgEmployee/delete.png" className="w-5 h-5 mr-1" alt="Delete" /> Xoá
                </button>
              </div>
            </div>
          ))}
        </div>
        {showEditDialog && <DialogEditEmployee employee={selectedEmployee} onClose={() => setShowEditDialog(false)} onUpdateEmployee={handleUpdateEmployee} />}
        {showAddDialog && <DialogAddEmployee onClose={() => setShowAddDialog(false)} onUpdateEmployeeList={handleAddEmployee} />}
        {showDeleteDialog && <DialogDeleteEmployee handleClose={() => setShowDeleteDialog(false)} onDeleteEmployee={handleDeleteEmployee} employee={deleteEmployee} />}
      </div>
    </>
  );
};

export default EmployeeManagement;
