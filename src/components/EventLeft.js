const EventLeft = (props) => {
  console.log("Testtt");
  return (
    <li class={props.dir}>
      <div class="timeline-image">
        <img class="rounded-circle img-fluid" src={props.img} alt="" />
      </div>
      <div class="timeline-panel">
        <div class="timeline-heading">
          <h4>{props.period}</h4>
          <h4 class="subheading">{props.title}</h4>
        </div>
        <div class="timeline-body">
          <p class="text-muted">{props.description}</p>
        </div>
      </div>
    </li>
  );
};

export default EventLeft;
