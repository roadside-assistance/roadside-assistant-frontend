export default function() {
  return [
    {
      title: "Recruit",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/recruit",
    },{
      title: "Recruit : country manager",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/recruit-comp",
    }, {
      title: "Reports",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/reports",
    },
    {
      title: "Dismissal",
      htmlBefore: '<i class="material-icons">not_interested</i>',
      to: "/dissolution",
    }, {
      title: "Create Team",
      htmlBefore: '<i class="material-icons">edit</i>',
      to: "/create-team",
    }, {
      title: "Edit Team",
      htmlBefore: '<i class="material-icons">edit</i>',
      to: "/edit-team",
    }
  ];
}
