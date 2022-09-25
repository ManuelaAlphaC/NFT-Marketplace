import "./App.css";
import { Contract, ethers } from "ethers";
import { useEffect, useState } from "react";
import contractABI from "./contractABI.json";

const contractAddress = "0xB548D73Af181a07987c0A39E03072b393f1843e0";

function App() {
 
	const [account, setAccount] = useState(null);
	const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [NFTContract, setNFTContract] = useState(null);
  // state for whether app is minting or not.
	const [isMinting, setIsMinting] = useState(false);


  useEffect(() => {
		if (window.ethereum) {
			setIsWalletInstalled(true);
		}
	}, []);

  useEffect(() => {
		function initNFTContract() {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      setNFTContract(new Contract(contractAddress,contractABI.abi,signer));
		}
		initNFTContract();
	}, [account]);


  async function connectWallet() {
		window.ethereum
			.request({
				method: "eth_requestAccounts",
			})
			.then((accounts) => {
				setAccount(accounts[0]);
			})
			.catch((error) => {
				alert("Something went wrong");
			});
	}
 

    const data = [
        {
            url: "./assets/images/1.png",
            param: "handleMint('https://bafkreibapqgy7ar2yub62odxbaie3fzylutg25y4is62p56b3ttbq2axzi.ipfs.nftstorage.link/')",
        },
        {
          url: "./assets/images/2.png",
            param: "handleMint('https://bafkreif44ubuxj2ivfdzpdhq5sugxnmrnls2s7rdxfte4ta3hdjzhud5fi.ipfs.nftstorage.link/')",
        },
        {
          url: "./assets/images/3.png",
            param: "handleMint('https://bafkreihrdkxsnurdl7scifzvk5gwk7dwtjepafiaztzuar4ej47ycghqga.ipfs.nftstorage.link/')",
        },
        {
          url: "./assets/images/4.png",
            param: "handleMint('https://bafkreicruo4wy7n2leyqbuzeoouf2b26536vlsjqmufsgzhohac3nrkkpm.ipfs.nftstorage.link/')",
        },
        {
          url: "./assets/images/5.png",
            param: "handleMint('https://bafkreia44otutx5vyhzpxten2lccxfecd5lajrxsc6ffxneklzi45liln4.ipfs.nftstorage.link/')",
        },
        {
          url: "./assets/images/6.png",
          param: "handleMint('https://bafkreigyz2l4d2fi3cnq3sreqeos4zulfqmd5zob7t5zmyhnlelyyjk4he.ipfs.nftstorage.link/')",
      },
      {
        url: "./assets/images/7.png",
          param: "handleMint('https://bafkreicetrjw76eumqcnz5lvii5xp2gpiuid4xruxmdzq67exfymsbyooe.ipfs.nftstorage.link/')",
      },
      {
        url: "./assets/images/8.png",
          param: "handleMint('https://bafkreid2kyut57ghn6hdhlaak5y45svtwconolo77qzbrxbirvuhif2lpi.ipfs.nftstorage.link/')",
      },
      {
        url: "./assets/images/9.png",
          param: "handleMint('https://bafkreifp5tzclk3taha75ckli5wzykh6ypmhpbr4z5jluwh67ywuvtyvom.ipfs.nftstorage.link/')",
      },
      {
        url: "./assets/images/10.png",
          param: "handleMint('https://bafkreidzc76ozbg2ffojmvopehx3uaxvkjgvdtkoniulrwcsafrzyqr2gy.ipfs.nftstorage.link/')",
      },
      {
        url: "./assets/images/11.png",
        param: "handleMint('https://bafkreiaotjc47a65ek73vrihbgshjhl46mq5emrd73qdtgnslj6czfkfwq.ipfs.nftstorage.link/')",
    },
    {
      url: "./assets/images/12.png",
        param: "handleMint('https://bafkreiadtz3gj367zdnvbekdwed22hlwvvs4wpqulkuym5gm5qnc453csi.ipfs.nftstorage.link/')",
    },
    {
      url: "./assets/images/13.png",
        param: "handleMint('https://bafkreicx7zzfy7rrhyowbsauhpg7njpymvfm5unjiofwuaigp6lfu6v2ya.ipfs.nftstorage.link/')",
    },
    {
      url: "./assets/images/14.png",
        param: "handleMint('https://bafkreiet3ypxkdfr6jo4yakll2zz2catvvskwifdwi6t7z4yutp4szhjou.ipfs.nftstorage.link/')",
    },
    {
      url: "./assets/images/15.png",
        param: "handleMint('https://bafkreidzrrvteev3pptyuga4leg7q4y5cbbrnfc7eayka6h4z3na4pnc2m.ipfs.nftstorage.link/')",
    },
    {
      url: "./assets/images/16.png",
      param: "handleMint('https://bafkreigrxlypwmksy3hppcjyr2gqhfxq5h5besuyvdmzyih6ftyvw54hjy.ipfs.nftstorage.link/')",
  },
  {
    url: "./assets/images/17.png",
      param: "handleMint('https://bafkreibs2rdwhweq5jqrytlgvyqougxxw5gsqmwrjxywn76x6p23g7hmtu.ipfs.nftstorage.link/')",
  },
  {
    url: "./assets/images/18.png",
      param: "handleMint('https://bafkreibs2rdwhweq5jqrytlgvyqougxxw5gsqmwrjxywn76x6p23g7hmtu.ipfs.nftstorage.link/')",
  },
  {
    url: "./assets/images/19.png",
      param: "handleMint('https://bafkreidpa2kcybj37h4eyqcvvx2tpzlrur7t5ahxm5fg264j5fqmpalnp4.ipfs.nftstorage.link/')",
  },
  {
    url: "./assets/images/20.png",
      param: "handleMint('https://bafkreibz24scbqw6o3b35dusbowhiyoytgpztwc7wo6az6humofl4jtq7e.ipfs.nftstorage.link/')",
  },
    ];

    async function withdraw(){
        try {
 
            const response = await NFTContract.withdraw();
            console.log("Received: ", response);
          } catch (err) {
              alert(err);
          }
          
    }

    async function handleMint(tokenURI) {
        setIsMinting(true);
            try {
              const options = {value: ethers.utils.parseEther("0.0001")};
              const response = await NFTContract.mint(tokenURI, options);
              console.log("Received: ", response);
            } catch (err) {
                alert(err);
            }
            finally {
              setIsMinting(false);
            }
    }

    if (account === null) {
      return (
        <>
         <div className="container">
           <br/>
          <h1> CUCI</h1>
          <h2>NFT Marketplace</h2>
          <p>Buy an NFT from our marketplace 🥰</p>
  
          {isWalletInstalled ? (
            <button onClick={connectWallet}>Connect 🦊</button>
          ) : (
            <p>Install Metamask wallet</p>
          )}
          </div>
          </>
      );
    }

    return (
        <>
            <div className="container">
            <br/>
            <h1> 🤖 CUCI </h1>
          
             <h2>Choose your NFT ⬇️</h2>
                {data.map((item, index) => (
                    <div className="imgDiv">
                        <img
                            src={item.url}
                            key={index}
                            alt="images"
                            width={250}
                            height={250}
                        />
                        <button isLoading={isMinting}
                            onClick={() => {
                                eval(item.param);
                            }}
                        >
                            Mint 
                        </button>
                        <div><p>0.0001 eth</p></div>
                    </div>
                ))}
                <div></div>
                 <button 
                            onClick={() => {
                                withdraw();
                            }}
                        >
                            Withdraw Money from Contract
                 </button>
                 <div className='flex justify-center items-center flex-col mt-5'>
                  <p><a href='https://mailto:manuelacuci8@gmail.com' className='text-white text-sl text-center' ><img src='https://bafkreihv5bcv2tngtyopewqmyg44ofoezllrrb2uctcdsspk7twhlkmevq.ipfs.nftstorage.link/' alt='@manuelacuci8@gmail.com'/></a></p>
                  <p><a href='https://manuelita.podia.com/' target="_blank" className='text-white text-sl text-center'>My portfolio</a></p>
                </div>
                <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5'/>
                <div className='sm:w-[90%] w-full flex justify-between items-center mt-3'>
                  <p className='text-white text-sl text-center'>@CUCI 2022</p>
                </div>
          
        </div>

        </>
    );
}

export default App;
