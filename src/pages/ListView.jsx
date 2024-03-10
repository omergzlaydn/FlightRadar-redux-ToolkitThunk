import { useSelector } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css"
import ReactPaginate from "react-paginate";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ListView = ({openModal}) => {
  const state =useSelector(store => store);
//? Gösterilecek ilk elemanı hesapla
  const [itemOffset, setItemOffset] = useState(0);

//? sayfa başına gösterilecek eleman sayısı
  const itemsPerPage = 25

 //? Gösterilecek son elemanı hesapla
  const endOffset = itemOffset + itemsPerPage;
  
//? Elimizdeki aralığa göre verileri kes
  const currentItems = state.flights?.slice(itemOffset, endOffset);

//? Toplam sayfa sayısını hesaplıyoruz
  const pageCount = Math.ceil(state.flights?.length / itemsPerPage);

  // her sayfa değiştiğinde çalışır
  const handlePageClick = (event) => {

//? Gösterilecek ilk elemanı belirler 
    const newOffset = event.selected * itemsPerPage;

//? State'i günceller
    setItemOffset(newOffset);
  };

  return (
    <div className="p-4">
      <table className="table table-dark table-hover mt-5 table-responsive">
        <thead>
          <tr>
            <th>Id</th>
            <th>Queue Code</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            // eslint-disable-next-line react/jsx-key
            currentItems.map((i) => <tr>
              <td>{i.id}</td>
              <td>{i.code}</td>
              <td>{i.lat}</td>
              <td>{i.lng}</td>
              <td><button onClick={()=> openModal(i.id)}>Detail</button></td>

            </tr>)
          }
        </tbody>
      </table>

      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Back"
        className="paginate"
      />

    </div>
  )
}

export default ListView