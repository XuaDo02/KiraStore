import React, { useState } from "react";
import axios from "axios";
import { EmployeeData } from "../../../../../types/employeedata";

const DialogAddEmployee = ({ onClose, onUpdateEmployeeList }: { onClose: () => void; onUpdateEmployeeList: (newEmployee: EmployeeData) => void }) => {
  const [formData, setFormData] = useState({
    UserId: "",
    UserName: "",
    DateOfBirth: "",
    Gender: "",
    Email: "",
    Phone: "",
    Address: "",
    Position: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post<EmployeeData>(
        "https://6615003e2fc47b4cf27db117.mockapi.io/employee",
        formData
      );
      onUpdateEmployeeList(response.data); // Cập nhật danh sách nhân viên trong EmployeeManagement
      onClose(); // Đóng DialogAddEmployee sau khi thêm nhân viên thành công
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  const handleClose = () => {
    onClose(); // Đóng DialogAddEmployee khi nhấn nút "Huỷ" hoặc "Đóng"
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-customDark3 absolute top-164 left-435 w-[569px] h-auto rounded-8">
        <div className="h-[48px] md:px-5 py-5 rounded-tl-8 rounded-tr-8 flex items-center bg-customBlack">
          <span className="text-lg font-sans font-semibold tracking-tight text-white">Thêm nhân viên</span>
          <button className="flex ml-auto" onClick={handleClose}><img src="/imgEmployee/close.png" className="w-6 h-6" alt="Close" /></button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mt-5">
            <div className="mb-2 flex items-center text-zinc-400 text-sm">
              <label className="block font-medium w-1/2 text-left px-5">Mã nhân viên</label>
              <input name="UserId" value={formData.UserId} onChange={handleChange} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" />
            </div>
            <div className="mb-2 flex items-center text-zinc-400 text-sm">
              <label className="block font-medium w-1/2 text-left px-5">Họ và tên</label>
              <input name="UserName" value={formData.UserName} onChange={handleChange} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" />
            </div>
            <div className="mb-2 flex items-center text-zinc-400 text-sm">
              <label className="block font-medium w-1/2 text-left px-5">Ngày sinh</label>
              <input name="DateOfBirth" value={formData.DateOfBirth} onChange={handleChange} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" />
            </div>
            <div className="mb-2 flex items-center text-zinc-400 text-sm">
              <label className="block font-medium w-1/2 text-left px-5">Giới tính</label>
              <input name="Gender" value={formData.Gender} onChange={handleChange} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" />
            </div>
            <div className="mb-2 flex items-center text-zinc-400 text-sm">
              <label className="block font-medium w-1/2 text-left px-5">Email</label>
              <input name="Email" value={formData.Email} onChange={handleChange} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" />
            </div>
            <div className="mb-2 flex items-center text-zinc-400 text-sm">
              <label className="block font-medium w-1/2 text-left px-5">Số điện thoại</label>
              <input name="Phone" value={formData.Phone} onChange={handleChange} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" />
            </div>
            <div className="mb-2 flex items-center text-zinc-400 text-sm">
              <label className="block font-medium w-1/2 text-left px-5">Địa chỉ</label>
              <input name="Address" value={formData.Address} onChange={handleChange} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" />
            </div>
            <div className="mb-2 flex items-center text-zinc-400 text-sm">
              <label className="block font-medium w-1/2 text-left px-5">Chức vụ</label>
              <input name="Position" value={formData.Position} onChange={handleChange} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" />
            </div>
            
          </div>

          <div className="mt-5">
            <hr className="border-t border-neutral-600 w-full" />
          </div>

          <div className="flex justify-center my-5 h-18">
            <button type="button" className="w-60 h-10 mr-14 text-sm font-normal text-customYellow bg-neutral-800 border border-customYellow rounded-md" onClick={handleClose}>
              Huỷ
            </button>
            <button type="submit" className="w-60 h-10 text-sm font-normal rounded-md bg-customYellow text-customDarkGray">
              Thêm nhân viên
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DialogAddEmployee;
