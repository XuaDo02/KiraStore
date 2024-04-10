import { useState } from "react";
import { EmployeeData } from "../../../../../types/employeedata";
import { toast } from "react-toastify";

interface Props {
  employee: EmployeeData | null;
  onClose: () => void;
  onUpdateEmployee: (updatedEmployee: EmployeeData) => void;
}

const DialogEditEmployee: React.FC<Props> = ({ employee, onClose, onUpdateEmployee }) => {
  const [editedEmployee, setEditedEmployee] = useState<EmployeeData | null>(employee);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editedEmployee) return;
    const { name, value } = e.target;
    setEditedEmployee({ ...editedEmployee, [name]: value });
  };

  const handleSubmit = () => {
    if (!editedEmployee) return;
    onUpdateEmployee(editedEmployee); // Gọi hàm cập nhật thông tin nhân viên
    toast.success("Cập nhật thông tin nhân viên thành công!")
    onClose(); // Đóng dialog sau khi đã cập nhật xong
  };

  if (!employee) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-customDark3 absolute top-164 left-435 w-[569px] h-auto rounded-8">
        <div className="h-[48px] md:px-5 py-5 rounded-tl-8 rounded-tr-8 flex items-center bg-customBlack">
          <span className="text-lg font-sans font-semibold tracking-tight text-white">Sửa thông tin nhân viên</span>
          <button className="flex ml-auto" onClick={onClose}><img src="/imgEmployee/close.png" className="w-6 h-6" alt="Close" /></button>
        </div>

        <div className="mt-5">
          <div className="mb-2 flex items-center text-zinc-400 text-sm">
            <label className="block  font-medium w-1/2 text-left px-5">Mã nhân viên</label>
            <input type="text" name="id" value={editedEmployee?.id || ''} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" onChange={handleInputChange} readOnly />
          </div>
          <div className="mb-2 flex items-center text-zinc-400 text-sm">
            <label className="block text-sm font-medium w-1/2 text-left px-5">Họ và tên</label>
            <input type="text" name="UserName" value={editedEmployee?.UserName || ''} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" onChange={handleInputChange} />
          </div>
          <div className="mb-2 flex items-center text-zinc-400 text-sm">
            <label className="block text-sm font-medium w-1/2 text-left px-5">Ngày sinh</label>
            <input type="text" name="DateOfBirth" value={editedEmployee?.DateOfBirth || ''} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" onChange={handleInputChange} />
          </div>
          <div className="mb-2 flex items-center text-zinc-400 text-sm">
            <label className="block text-sm font-medium w-1/2 text-left px-5">Giới tính</label>
            <input type="text" name="Gender" value={editedEmployee?.Gender || ''} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" onChange={handleInputChange} />
          </div>
          <div className="mb-2 flex items-center text-zinc-400 text-sm">
            <label className="block text-sm font-medium w-1/2 text-left px-5">Email</label>
            <input type="text" name="Email" value={editedEmployee?.Email || ''} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" onChange={handleInputChange} />
          </div>
          <div className="mb-2 flex items-center text-zinc-400 text-sm">
            <label className="block text-sm font-medium w-1/2 text-left px-5">Số điện thoại</label>
            <input type="text" name="Phone" value={editedEmployee?.Phone || ''} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" onChange={handleInputChange} />
          </div>
          <div className="mb-2 flex items-center text-zinc-400 text-sm">
            <label className="block text-sm font-medium w-1/2 text-left px-5">Địa chỉ</label>
            <input type="text" name="Address" value={editedEmployee?.Address || ''} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" onChange={handleInputChange} />
          </div>
          <div className="mb-2 flex items-center text-zinc-400 text-sm">
            <label className="block text-sm font-medium w-1/2 text-left px-5">Chức vụ</label>
            <input type="text" name="Position" value={editedEmployee?.Position || ''} className="bg-customDark3 py-1 flex justify-end w-full px-5 text-right" onChange={handleInputChange} />
          </div>
        </div>

        <div className="mt-5">
          <hr className="border-t border-neutral-600 w-full"/>
        </div>

        <div className="flex justify-center my-5 h-18">
          <button className="w-60 h-10 mr-14 text-sm font-normal text-customYellow bg-neutral-800 border border-customYellow rounded-md" onClick={onClose}>
            Huỷ
          </button>
          <button className="w-60 h-10 text-sm font-normal rounded-md bg-customYellow text-customDarkGray" onClick={handleSubmit}>
            Sửa thông tin
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogEditEmployee;
