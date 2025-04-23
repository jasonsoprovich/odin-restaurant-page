function loadAbout() {
  const contentContainer = document.getElementById('content-container');
  const content = document.getElementById('content');

  contentContainer.innerHTML = '';
  content.innerHTML = '';
  content.classList.add('content');

  const aboutDiv = document.createElement('div');
  aboutDiv.classList.add('about');

  const headline = document.createElement('h1');
  headline.textContent = 'About';
  aboutDiv.appendChild(headline);

  const description = document.createElement('p');
  description.innerHTML = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at felis ultrices, congue magna vehicula, sollicitudin eros. Integer mi dolor, suscipit non tincidunt maximus, aliquam vel neque. In hac habitasse platea dictumst. Nulla vitae justo eget nulla volutpat suscipit ac et turpis. Etiam placerat sollicitudin placerat. Vestibulum nulla diam, elementum non mi ut, commodo condimentum dui. Mauris laoreet arcu in ultricies faucibus. Nullam malesuada rhoncus quam quis luctus. Sed sodales diam lectus, laoreet ornare urna blandit id.

    Maecenas varius vitae quam ut ultrices. Etiam interdum mattis erat, ac venenatis enim maximus in. Maecenas fringilla dignissim quam, porta convallis turpis accumsan vel. Sed accumsan est nec lorem sodales, sed elementum nisl varius. Etiam non nisl fermentum, ullamcorper est vitae, suscipit ligula. Nullam turpis eros, scelerisque in lectus at, pulvinar finibus erat. Nullam semper tincidunt leo non mollis. Aenean malesuada pulvinar sapien, nec aliquam urna iaculis vel. Ut varius magna eget turpis gravida viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

    Etiam turpis enim, vehicula in sodales ac, interdum et libero. Fusce vestibulum nisi a est maximus venenatis. Fusce euismod dignissim lorem vel cursus. Donec in dui a augue convallis scelerisque hendrerit eu felis. Suspendisse nec neque eget nibh congue efficitur. Nullam lobortis justo ut eros ultricies, vel sodales nunc tincidunt. Phasellus accumsan, purus vitae commodo ornare, lorem dolor aliquet ipsum, sodales aliquam ante dolor non tortor. Sed imperdiet consequat erat a scelerisque. Cras elementum auctor nunc eget dignissim. Aenean vitae mi vitae lectus sagittis placerat. Vestibulum in tortor enim.

    Nam ac lorem sit amet sem elementum pretium. Nullam volutpat lorem in neque maximus sodales. Vestibulum rutrum diam id est consequat, euismod pharetra lorem ultricies. Aenean a justo ex. Praesent iaculis velit id nisi auctor dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin quam dolor, dictum ut erat at, ornare pharetra lacus.

    Integer vel dapibus ligula. Fusce in sem sagittis, venenatis quam quis, convallis sem. Donec a lorem sodales, sagittis orci in, viverra erat. Pellentesque ut ullamcorper nibh. Pellentesque sit amet tincidunt elit. Sed sagittis ligula at est commodo, id pretium justo ultrices. Cras posuere efficitur semper. Praesent eu metus et lacus mattis ornare. Vivamus hendrerit nec arcu molestie volutpat. Praesent mattis at metus ut vehicula. Ut mauris erat, accumsan eget turpis et, facilisis finibus massa. Curabitur sodales justo enim, vitae blandit justo sodales at. Suspendisse potenti. Integer euismod ultricies leo, at convallis justo accumsan a. Morbi dignissim tellus massa, ut egestas magna maximus vel. Mauris rutrum leo eu ante varius, finibus laoreet nulla mattis.

    Vivamus eu dolor sed felis volutpat placerat at non enim. Fusce finibus neque in urna dignissim, in ultricies velit interdum. In a rhoncus dui. Vestibulum in dui eleifend, tincidunt ipsum et, commodo augue. Fusce id feugiat turpis. Vivamus eget accumsan dui. Aenean risus justo, euismod quis mauris eu, accumsan aliquam nibh. Duis est nisi, malesuada ut blandit a, euismod quis orci. Nullam blandit accumsan lacus, id gravida sapien finibus sed. Mauris purus felis, interdum et pulvinar a, euismod a nisi. Curabitur nec augue a augue varius sagittis. Vestibulum leo orci, mollis eu quam vel, condimentum mattis risus. Pellentesque quis elementum lacus. Donec sed malesuada nulla, id tristique nunc. Ut efficitur augue sapien, ut tristique elit blandit eu. Pellentesque maximus est libero, vehicula eleifend est porta bibendum.

    Donec tincidunt est nec mauris bibendum vulputate. Etiam elementum tristique mi, eget luctus diam imperdiet at. Duis nulla tortor, aliquet eget euismod in, varius at lectus. Nam lobortis, ex a iaculis tempus, sapien nisi commodo turpis, quis tempor erat neque eget mauris. Proin id erat vel erat viverra vehicula. Donec cursus fermentum ligula eu rhoncus. Mauris a gravida justo. Mauris nec vulputate justo. Nullam euismod eu orci sit amet tempus. Nam ac metus quis ante mollis laoreet vel eget nulla. Curabitur volutpat tortor velit, vitae mattis metus tempus et. Etiam mattis risus et augue facilisis, elementum viverra erat interdum.

    Aliquam lacinia est odio, at pellentesque velit fermentum sed. Nulla elementum ultrices diam blandit tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas ut lacus ac neque iaculis sodales eu at felis. Aenean pellentesque ut nibh et maximus. Nullam posuere tellus felis, sit amet consectetur lacus suscipit ac. Curabitur tempus efficitur magna. Fusce id risus rutrum, accumsan leo ut, commodo diam. Ut finibus, est at aliquet tincidunt, nunc dolor sagittis ante, id gravida sem nulla id augue. Ut sit amet leo purus. Nulla facilisi.
  `;
  aboutDiv.appendChild(description);

  content.appendChild(aboutDiv);
  contentContainer.appendChild(content);
}

export default loadAbout;