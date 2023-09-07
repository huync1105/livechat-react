import './ShowSidebarUser.scss';

export default function ShowSidebarUser(params) {
  return (
    <>
      <li>
        <div
          className="user__avatar"
          style={{
            backgroundColor:
              "#" + Math.floor(Math.random() * 16777215).toString(16),
          }}
        >
          <div className="user__avatar--status"></div>
        </div>

        <div className="user__info">
          <span>
            <h3>My name</h3>
            <p>10:57 AM</p>
          </span>

          <p className="user__info--mess">
            assasasasasaasasasasasasasasasasssss
          </p>
        </div>
      </li>
    </>
  );
}
