import React from "react";

const Nav = () => {
  return (
    <div className="nav" id="nav">
      <div className="nav_container">
        <div className="navbar">
          <div className="nav_mobileMenu">
            <div className="mobileMenu_box">
              <div className="mobileMenu_icon">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
              <div className="mobileMenu_text">MENU</div>
            </div>
            <div className="mobileMenu_box"></div>
          </div>
          <div className="nav_title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="65"
              height="64"
              viewBox="0 0 65 64"
            >
              <path
                fill="#e10a0a"
                fill-rule="evenodd"
                d="M50.465 19.686c.448-.181.912-.261 1.38-.051.023.01.047.019.07.03.114.05.19.155.28.231.095.081.125.249.16.385.028.105.049.203.17.26-.06.073-.134.138-.087.229.036.07.087.133.131.2v.271c-.123.004-.144.103-.14.22l.015.317.1-.01c0 .099.023.2-.007.28-.034.093-.02.18-.02.266.003.097.03.194.049.299-.042.043-.169.004-.151.116.01.06.049.116.078.18-.092.093-.092.093-.028.205-.025.05-.065.095-.067.14-.007.294-.01.587-.004.88.001.075.036.149.063.253-.035.042-.093.115-.041.216.01.021.002.058-.008.084-.04.106-.01.182.091.223-.01.055-.035.107-.023.148.022.07.03.128-.012.194-.017.026-.01.07-.006.106.01.074.02.137-.047.204-.059.06-.023.117.075.14l-.112.202.111.106c-.055.052-.058.066-.068.187-.006.065-.049.135.044.176.015.007.036.031.034.038-.057.13.062.169.134.237-.02.031-.031.06-.052.082-.063.067-.111.124.033.148.018.003.026.059.038.09.028.074.028.166.133.192.026.007.05.034.069.057.142.174.273.22.5.131.323-.126.645-.257.955-.41.468-.232.924-.487 1.387-.728.464-.24.95-.324 1.468-.209.083.019.177-.005.258.017.094.025.196.062.264.125.177.164.296.369.368.599.008.026.033.047.05.07v.075c-.087.119-.087.119 0 .225v.075c-.028.006-.072.002-.083.02-.057.084-.117.17-.156.264-.212.505-.603.84-1.063 1.115-.438.261-.926.392-1.407.547-.57.183-1.143.364-1.703.576-.589.223-1.168.471-1.743.728-.39.174-.768.38-1.148.576-.447.231-.892.467-1.338.702-.557.294-1.116.583-1.67.883-.829.45-1.656.902-2.48 1.364-.558.314-1.108.644-1.662.968-.473.277-.95.549-1.418.834-.413.252-.819.518-1.225.781-.177.115-.336.262-.523.358-.464.238-.887.538-1.318.826-.198.133-.39.273-.585.41-.02.014-.05.029-.056.049-.043.15-.183.196-.297.265-.133.081-.23.162-.219.345.012.204-.021.411-.034.617-.002.024-.01.058.002.073.066.08.016.135-.03.197-.02.028-.047.085-.036.097.115.127.006.245-.008.376.098.086.091.19.06.317-.035.134-.135.278-.007.422.005.007-.053.069-.1.129.002.006 0 .054.023.088.064.1.075.194.013.297-.013.024-.02.07-.006.088.074.107.02.209.01.318-.022.252-.018.507-.01.76.004.097-.017.202.043.295.014.022.011.077-.005.09-.093.072-.077.15-.049.232.022.06.035.165.033.23-.01.336-.022.672-.034 1.009-.003.097 0 .197-.02.292-.013.067-.017.119.035.169.01.01.013.035.011.053-.015.142-.044.284-.047.427-.003.132.02.265.03.38-.045.067-.104.124-.124.193-.021.072-.005.155-.005.235.047.03.1.06.146.097.015.011.01.045.015.075l-.17.041.12.16c-.006.044-.027.092-.012.112.066.083.045.157.006.24-.045.098-.077.2-.12.315.042.113.095.246.139.383.011.035.008.099-.014.116-.168.133-.124.275-.031.423l.048.076c-.14.05-.19.161-.136.29.007.015.024.039.035.039.105-.004.1.096.153.152l-.109.061c.053.213.053.213-.012.355l.212.222-.103.265.12.015c-.057.09-.051.172.043.231-.039.131.077.25.023.385l-.123.054c.09.09.055.173.024.263-.033.096.044.226.135.215.11-.014.12.057.115.114-.019.203.055.375.165.546-.056.13-.106.265-.271.31l.14.023.004.03-.126.055c.005.083.014.179.017.274.003.102.057.145.156.144.092-.001.193.063.163.128-.05.105.033.114.075.172-.103.056-.012.258-.21.265l.105.04-.089.157c.055.083.144.144.163.257.007.038.1.062.164.098-.076.077-.147.147-.127.259.003.02-.034.043-.047.068-.025.046-.046.095-.072.149l.166.095c-.063.057-.137.105-.185.172-.047.065-.054.157-.1.221-.073.1-.151.208-.252.276-.154.105-.318.195-.481.287-.105.059-.222.097-.342.106-.152.01-.285.012-.435-.032-.046-.017-.09-.038-.138-.05-.28-.074-.525-.202-.728-.416-.152-.16-.202-.359-.267-.552-.193-.566-.213-1.15-.178-1.74.024-.43.019-.862.034-1.292.01-.324.037-.648.05-.972.011-.293.01-.586.019-.88.007-.254.021-.508.028-.762.006-.224.012-.447.008-.671-.003-.174-.028-.348-.028-.522.001-.2.024-.398.03-.597.003-.079-.01-.158-.015-.237-.003-.03-.021-.074-.008-.087.104-.108.057-.238.058-.357.004-.675.003-1.35.004-2.024l.002-1.685c0-.444 0-.888.004-1.332.002-.148.019-.296.025-.444.001-.042-.01-.084-.018-.142-.224.085-.417.203-.598.332-.342.244-.675.502-1.01.757-.349.266-.697.535-1.043.805l-.74.583c-.254.197-.516.382-.764.585-.434.353-.858.718-1.29 1.072-.298.242-.607.47-.904.713l-1.339 1.105c-.315.258-.635.511-.953.766-.015.012-.031.022-.044.035-.176.179-.352.357-.525.537-.082.086-.15.185-.239.263-.201.177-.418.338-.616.52-.212.193-.408.404-.613.605-.12.118-.248.227-.365.347-.065.067-.114.148-.173.22-.06.071-.122.14-.185.207-.094.1-.188.2-.285.297l-1.27 1.256c-.058.056-.106.122-.16.183l-.435.487c-.05.056-.102.11-.155.164l-.262.265c-.04.04-.084.077-.124.116-.166.162-.33.327-.497.487l-.493.46c-.154.147-.327.234-.548.242-.373.013-.728-.025-1.056-.223-.18-.108-.307-.25-.402-.432-.112-.216-.155-.452-.167-.686-.008-.154.017-.326.12-.463.152-.2.303-.4.457-.598.414-.534.922-.978 1.411-1.44.348-.327.703-.647 1.053-.971.29-.27.574-.546.869-.81.313-.282.634-.555.954-.828.364-.31.73-.617 1.098-.92.306-.253.62-.493.924-.748.245-.205.474-.428.717-.636.156-.133.326-.25.487-.379l.91-.733.753-.602c.18-.145.362-.29.545-.433.123-.097.25-.189.372-.288.097-.08.18-.177.28-.25l1.246-.882c.322-.231.634-.475.955-.707l.862-.609c.275-.197.548-.397.82-.6.458-.344.91-.695 1.373-1.034.309-.227.628-.44.946-.655.052-.034.087-.09.093-.152.025-.244.032-.488.006-.733-.013-.129.003-.26-.005-.39-.003-.049-.029-.124-.062-.136-.038-.013-.102.024-.145.053-.234.153-.465.311-.697.467-.02.014-.058.026-.083.028-.177.017-.332.099-.492.165-.045.018-.086.048-.131.066-.033.015-.078.037-.104.026-.117-.049-.22.004-.328.028-.303.069-.61.112-.92.093-.524-.032-.96-.245-1.283-.655-.158-.2-.223-.444-.279-.689-.115-.506-.08-1.02-.076-1.532.001-.244.008-.488.002-.732-.003-.136-.031-.27-.042-.406-.006-.062-.013-.13.007-.186.134-.394.076-.807.132-1.207.088-.635.17-1.272.372-1.886.185-.562.448-1.086.802-1.564.156-.211.296-.44.479-.626.196-.2.435-.359.656-.533.034-.027.083-.037.114-.067.279-.265.648-.32.997-.422.173-.05.347-.02.506.05.069.031.152.114.18.184.048.12.069.246.02.386-.037.105-.034.228-.058.343-.05.233-.207.407-.312.61-.031.06-.112.097-.172.142-.098.072-.178.156-.218.275-.016.046-.04.1-.078.125-.105.073-.138.175-.189.285-.05.11-.122.222-.185.332-.042.074-.07.158-.092.24-.03.108-.045.215-.13.304-.054.055-.08.141-.103.218-.055.186-.085.38-.154.56-.068.176-.078.36-.108.542-.015.091.002.183.04.267.055.12.063.224.003.342-.032.065-.04.143-.05.216-.022.148-.041.296-.055.445-.009.099-.007.2-.01.299 0 .044.01.09 0 .13-.091.335-.039.674-.008 1.007.017.174.091.35.176.508.108.202.297.301.537.28.428-.038.774-.228 1.074-.533.282-.286.393-.637.454-1.01.087-.536.173-1.072.22-1.614.028-.323.088-.644.104-.968.009-.165.061-.336-.01-.502-.006-.013-.003-.035.005-.047.11-.151.085-.33.1-.5.03-.304.06-.61.081-.914.033-.468.054-.936.09-1.403.024-.305.049-.612.106-.912.078-.406.354-.654.726-.826.27-.126.548-.145.832-.11.186.022.355.093.494.243.15.163.223.388.194.607-.016.123-.012.25-.011.376 0 .04.024.081.03.123.006.031.005.064 0 .095-.004.016-.034.034-.03.044.078.23-.113.456-.008.685-.088.219.022.449-.07.683-.088.22-.072.484-.089.73-.03.428-.045.859-.078 1.288-.033.43-.081.857-.12 1.286-.018.187-.028.374-.045.561-.009.098-.038.195-.04.293-.003.278-.02.556-.05.833-.016.147-.017.293.028.443.03.1-.011.218-.02.328-.01.154-.05.313-.022.46.032.174-.013.332-.03.497-.013.135-.018.271-.021.407-.004.161-.002.322 0 .483.001.042.014.083.026.152.069-.032.126-.052.175-.084.273-.178.541-.366.819-.54.501-.313 1.008-.618 1.512-.927.396-.244.793-.487 1.187-.733.256-.159.505-.328.763-.482.14-.084.29-.151.44-.22.17-.08.335-.165.471-.299.024-.023.063-.034.097-.045.075-.025.16-.033.227-.072.479-.276.953-.561 1.432-.838.414-.239.832-.472 1.249-.706l2.126-1.189 1.484-.832c.143-.08.283-.164.424-.248.038-.022.076-.046.109-.075.083-.07.074-.107-.02-.17-.109-.073-.227-.141-.311-.237-.151-.172-.245-.378-.252-.61-.008-.275-.004-.55-.01-.825-.007-.335.055-.664.075-.996.003-.044.012-.092-.001-.13-.082-.238-.045-.468.031-.698.01-.029.011-.06.002-.089-.039-.117-.083-.234.004-.35-.036-.381.163-.746-.057-1.146-.126-.23-.102-.505.022-.734.163-.299.078-.489-.064-.65-.036-.04-.087-.09-.136-.095-.245-.027-.495-.106-.729.056-.153.107-.324.188-.469.304-.095.078-.165.182-.217.293-.036.073-.083.119-.142.166-.12.095-.239.185-.287.35-.021.075-.13.126-.212.197-.014.129-.016.28-.12.402-.02.024-.017.07-.021.105-.016.126.026.263-.07.375-.008.01-.003.035 0 .052.023.108.024.108-.094.088l-.054.122.083.055v.247c-.045.02-.115.03-.139.069-.024.038-.012.107 0 .158.018.078.047.153.076.227.031.079.022.14-.043.201-.062.059-.12.128-.158.204-.02.04-.016.132.012.15.12.081.096.204.116.315l.023.146c-.04.017-.08.085-.142.004-.026.111-.118.21-.018.326.005.005-.001.024-.007.034-.13.246-.047.512-.072.768-.009.097.082.06.123.104-.076.115-.192.229-.048.364l-.068.064.13.105c-.026.088-.058.168-.072.251-.013.075.024.183-.016.226-.087.094.002.142.015.212.01.048-.003.108-.026.153-.077.154-.163.304-.245.455-.003.005-.009.01-.01.016-.035.3-.29.414-.5.554-.17.114-.368.19-.555.278-.227.107-.469.107-.706.059-.298-.06-.421-.253-.471-.594-.02-.128-.02-.258-.015-.388.033-.684.074-1.367.108-2.05.015-.294.019-.587.033-.88.024-.486.054-.972.078-1.457.02-.381.034-.762.053-1.143.011-.231.011-.464.044-.693.065-.444.24-.86.562-1.167.394-.377.873-.615 1.454-.539.059.008.148-.008.199-.04.132-.08.24-.06.383.002.18.078.388.098.585.023.29-.11.535-.279.72-.522.045-.058.119-.15.17-.202.164-.163.326-.327.492-.487.044-.044.095-.08.15-.11.23-.13.452-.282.696-.38zM25.313 9.61c.089-.016.311-.01.403-.002.16.014.347.067.524.12.628.19 1.036.588 1.213 1.218.07.249.1.496.09.752-.01.308-.112.584-.282.838-.092.136-.194.265-.288.4-.017.024-.032.06-.027.086.021.122-.074.2-.114.297-.01.022-.047.038-.075.048-.123.045-.237.093-.257.247-.008.057-.049.062-.108.032-.127.121-.261.233-.376.361-.34.381-.663.776-.934 1.208-.094.15-.154.32-.257.461-.453.622-.68 1.35-1 2.033-.186.398-.35.805-.53 1.206-.05.114-.08.225-.074.35.003.066-.019.137-.045.199-.037.087-.091.166-.132.252-.127.262-.256.522-.374.788-.059.133-.105.273-.136.415-.035.154-.086.295-.171.432-.073.117-.107.258-.152.391-.062.184-.114.371-.176.555-.063.185-.138.366-.197.552-.05.162-.09.327-.127.493-.064.292-.128.582-.266.85-.036.07-.034.137.006.2.046.07.02.118-.02.187-.094.167-.199.326-.24.525-.054.258-.103.521-.242.757-.073.124-.12.252-.13.407-.018.27-.086.536-.127.804-.01.066.005.136.005.204 0 .182-.078.343-.149.505-.012.028-.033.062-.06.072-.147.06-.173.194-.207.324l-.116.44c-.007.024-.016.054-.034.067-.124.094-.105.252-.174.371-.043.076-.057.167-.096.246-.111.22-.18.454-.24.69l-.115.471c-.123.473-.222.952-.332 1.427-.087.37-.177.74-.26 1.112-.006.026-.01.052-.01.079l-.007.161c-.003.037-.003.083-.024.108-.06.071.011.134 0 .198-.01.061-.09.1-.039.187.021.036-.013.127-.05.17-.144.162-.206.401-.158.601.057.242.052.476-.12.685-.045.054-.088.146-.072.205.057.204-.044.373-.102.548-.028.085-.054.162-.052.253.003.174-.004.349-.016.522-.003.045-.033.095-.065.128-.062.065-.096.128-.07.222.016.051.012.113 0 .167-.063.295-.136.588-.196.884-.028.136-.034.276-.052.415-.015.112.06.154.164.186-.008.161.02.329-.031.468-.065.176-.046.38-.212.529-.09.082-.127.223-.13.367-.007.22-.05.44-.078.661-.008.063-.017.125-.024.188-.01.096 0 .173.087.25.12.108.072.201-.137.28.03.192-.066.36-.122.54-.062.199-.076.412-.104.62-.071.535-.142 1.07-.209 1.607-.074.593-.14 1.186-.217 1.779-.075.578-.157 1.157-.24 1.735-.062.44-.122.88-.2 1.318-.06.336-.136.67-.222 1.001-.135.521-.622.765-1.049.82-.501.066-.958-.362-1.036-.769-.088-.454-.214-.901-.305-1.355-.078-.386-.128-.777-.194-1.165-.06-.356-.122-.71-.185-1.065-.006-.037-.02-.076-.042-.105-.043-.057-.053-.108-.022-.176.017-.036.01-.089 0-.13-.083-.326-.118-.66-.171-.99-.014-.084-.048-.147-.148-.147.128-.219.116-.284-.088-.447.007-.042.01-.092.026-.139.045-.14.036-.279.014-.416l-.05-.275c-.085-.532-.171-1.064-.255-1.597-.06-.382-.115-.764-.172-1.146L12.3 39.42c-.057-.377-.119-.753-.175-1.13-.06-.396-.116-.793-.173-1.189-.005-.038.002-.085-.019-.111-.137-.174-.094-.375-.098-.57-.003-.107-.016-.214-.032-.32-.076-.503-.155-1.004-.234-1.506-.026-.169-.043-.34-.082-.505-.018-.075-.07-.149-.123-.209-.055-.062-.078-.12-.072-.205.006-.076-.025-.155-.029-.232-.004-.09.001-.182.01-.272.004-.06.022-.118.034-.176-.06-.08-.11.007-.176.026-.004-.041-.018-.075-.007-.097.043-.091.016-.165-.059-.216-.071-.048-.152-.087-.233-.114-.02-.006-.074.045-.09.08-.048.109-.08.226-.131.334-.025.052-.077.091-.118.135-.016.016-.055.032-.053.042.023.114-.073.13-.14.163.022.157-.01.286-.08.43-.069.139-.2.268-.17.446-.115.178-.108.396-.188.578-.017.04-.03.08-.04.12l-.055.233c-.04.15-.12.29-.186.434-.022.047-.055.09-.008.124-.05.08-.128.156-.14.24-.025.197-.158.34-.22.517-.053.154-.137.299-.18.455-.033.12-.16.205-.124.346-.099.088-.187.192-.297.26-.334.21-.694.297-1.083.163-.439-.15-.701-.597-.612-1.046.024-.118.06-.235.1-.349.149-.426.329-.843.444-1.277.1-.372.274-.709.4-1.067.026-.077.023-.164.048-.241.051-.153.076-.31.191-.446.074-.088.071-.238.104-.36.024-.091.025-.2.08-.269.144-.184.199-.406.246-.616.065-.287.188-.551.272-.83l.192-.56c.054-.175.08-.359.142-.531.075-.216.179-.421.196-.653.29-.6.412-1.256.662-1.87.082-.2.135-.41.211-.613.115-.307.307-.555.594-.73.517-.313 1.287-.209 1.648.302.157.22.258.47.305.737.117.656.233 1.312.344 1.97.05.3.087.603.135.904.013.087.045.17.065.256.008.036.006.073.007.11 0 .031-.012.069 0 .093.095.178.065.385.143.566.017.041.01.093.011.14 0 .03-.013.082-.001.088.147.077.059.23.114.335.008.016.011.039.006.056-.08.28.034.539.08.805.044.253.055.513.117.761.043.171.042.343.073.511.012.066.065.125.11.207-.036.067 0 .146.034.24.09.252.25.485.211.777-.01.079.073.169.116.26-.116.163-.04.341.017.506.053.153.096.3.087.462-.012.217.085.408.153.606.013.036.027.071.044.105.07.139.056.264 0 .413-.061.16-.098.354-.06.514.038.16.043.354.196.483.04.033.054.115.054.175.001.126-.016.25-.024.376-.004.076-.028.16-.005.226.077.223.07.45.077.679.002.062-.009.127.071.16.023.01.045.049.046.075.005.131-.001.263.007.394.003.051.023.109.053.15.034.045.089.075.157.13.037-.112.088-.215.104-.322.055-.365.092-.731.147-1.095.088-.591.186-1.18.279-1.771.04-.252.075-.504.114-.755.028-.182.057-.364.09-.546.089-.5.195-1 .268-1.502.078-.543.189-1.077.306-1.612.047-.21.09-.422.132-.634l.245-1.273c.028-.137.063-.273.095-.409l.225-.927c.024-.098.055-.195.08-.292.186-.714.368-1.429.559-2.141.054-.202.139-.395.194-.596.041-.152.049-.314.087-.467.08-.314.167-.626.254-.938.092-.332.19-.661.281-.993.058-.207.108-.417.162-.626.003-.012.002-.028.01-.036.12-.131.1-.292.104-.45 0-.043.002-.095.025-.128.15-.22.157-.483.23-.724.104-.354.201-.707.366-1.041.097-.198.152-.418.208-.632.045-.173.079-.343.183-.498.065-.098.094-.222.135-.335.267-.73.534-1.46.798-2.19.124-.342.236-.687.362-1.027.197-.532.401-1.06.601-1.591.208-.554.413-1.11.624-1.663.077-.202.168-.4.248-.6.106-.266.21-.533.31-.8.148-.388.324-.76.531-1.121.193-.338.436-.626.714-.89.298-.282.637-.5 1.052-.573zM22.66 31.897l.14.009c.227.031.366.153.428.342.04.118.109.232.073.374-.015.058.069.138.113.219-.141.073-.17.107-.137.245.028.113.085.22.14.353-.037.064-.065.151-.018.256.02.044-.016.12-.044.172-.054.097-.072.192-.066.303.006.127-.017.258-.039.385-.035.204-.035.417-.151.604-.016.024-.01.06-.01.091-.005.272 0 .544-.014.815-.008.132-.03.271-.087.39-.055.116-.046.227-.055.343-.01.128-.03.256-.05.383-.024.146-.056.291-.078.437-.044.293-.09.587-.12.881-.019.176.003.354-.01.53-.02.25.051.499-.045.75-.065.171-.062.364-.094.547-.011.065-.04.128-.057.193-.016.063-.026.127-.04.199l.18.01-.042.178c-.081.024-.197-.035-.209.094-.001.016-.045.045-.058.04-.126-.044-.156.064-.222.116-.26.202-.528.393-.834.54-.166.079-.33.123-.514.107-.372-.03-.598-.216-.616-.562-.02-.388-.009-.778.001-1.168.01-.365.038-.729.054-1.094.015-.32.005-.639.079-.956.033-.146.002-.304 0-.456 0-.03-.01-.075.007-.088.053-.041.064-.09.065-.14v-.102l.06-1.074c.011-.233.018-.466.026-.7.002-.03 0-.061.002-.092.03-.327.053-.654.092-.98.05-.419.154-.824.342-1.212.184-.379.457-.674.825-.907.222-.142.45-.265.71-.335.136-.037.27-.051.414-.031zm6.638-2.478c.21 0 .386.061.489.264.07.139.147.274.206.417.028.068.024.151.03.228.001.03-.018.06-.016.089.026.438-.265.68-.555.92-.202.167-.408.33-.619.486-.333.246-.56.581-.782.924-.055.086-.096.174-.097.284 0 .07-.054.136-.073.207-.035.129-.033.264-.093.391-.035.074-.016.173-.023.291-.09.06-.111.181-.111.286 0 .215-.056.426-.018.645.02.124-.028.26-.034.39-.023.511-.049 1.022-.06 1.533-.008.352-.033.704-.089 1.049-.051.323-.198.614-.438.85-.36.356-.806.572-1.218.648-.219.04-.447-.081-.574-.309-.082-.147-.14-.305-.14-.479-.002-.216.015-.436-.01-.65-.025-.208.052-.4.05-.602-.002-.23.054-.456-.015-.692-.036-.12.028-.27.042-.406.007-.069.019-.141.005-.207-.033-.155.022-.304.013-.455 0-.006.004-.012.003-.018-.014-.197.014-.384.087-.571.035-.09.016-.202.025-.303.018-.198.041-.395.055-.593.021-.318.037-.636.053-.955.017-.33.023-.662.046-.992.025-.35.102-.693.255-1.009.154-.318.417-.535.724-.697.304-.16.632-.23.973-.266.223-.024.437-.093.637-.206.11-.062.234-.094.35-.145.12-.055.237-.118.357-.174.18-.086.36-.172.565-.173zm13.279-6.605l.147.007c.225.014.34.127.335.321-.004.121.07.212.126.3.074.117.045.229.044.342 0 .094-.016.2-.069.279-.063.093-.016.174-.023.26-.012.16-.023.326-.137.483.024.027.065.053.061.073-.025.12-.061.24-.091.361-.05.198-.043.396.011.592.022.08.025.155-.006.236-.019.053.002.117.007.176 0 .012.017.023.016.034-.01.208-.024.417-.03.625-.002.102.006.205.022.306.026.16.016.299-.12.433-.055.055-.032.173-.036.263-.003.087 0 .173.114.223.034.015.047.064.092.13l-.223-.037c.024.052.041.096.066.137.02.036.05.067.087.116l-.158-.01c-.017.115-.042.23-.05.345-.02.353-.04.707-.051 1.06-.001.024.002.048.007.071l.036.142c.01.054.023.109.018.162-.006.072-.041.143-.038.214.01.202-.148.343-.254.493-.133.188-.317.352-.544.467-.236.12-.473.238-.714.348-.186.085-.383.14-.6.13-.456-.025-.677-.249-.688-.629-.01-.315.029-.633.06-.948.05-.495.114-.989.17-1.484.076-.68.144-1.36.228-2.04.074-.605.165-1.208.248-1.812.017-.13.037-.258.047-.388.026-.343.17-.655.356-.95.189-.3.481-.524.821-.7.267-.136.565-.143.86-.124zm-18.942 3.302c.266-.004.36.057.436.247.024.06.042.124.076.179.15.24.097.491.01.725-.054.142-.183.258-.278.386-.003.004-.013.004-.015.008-.18.302-.496.452-.78.636-.146.094-.304.172-.462.247-.224.106-.445.026-.616-.091-.154-.106-.237-.288-.241-.49-.004-.168.036-.328.111-.473.077-.15.11-.32.236-.447.097-.096.18-.209.287-.293.204-.16.413-.315.635-.45.193-.117.413-.185.6-.184zm19.368-7.388c.213-.054.422-.069.633.015.062.025.134.02.21.03.078.146.198.27.213.465.008.12-.006.22-.032.336-.065.3-.246.511-.43.727-.034.04-.065.081-.09.127-.192.342-.504.536-.833.682-.196.087-.43.054-.64-.028-.092-.037-.186-.085-.26-.151-.058-.052-.099-.135-.124-.213-.179-.54.026-.979.362-1.364.268-.306.596-.527.99-.626z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="navbar">
          <ul className="nav_items">
            <li>COMPANIES</li>
            <li>ABOUT US</li>
            <li>OUR FOUNDATION</li>
            <li>BRANSON FAMILY</li>
            <li>VIRGIN RED</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
