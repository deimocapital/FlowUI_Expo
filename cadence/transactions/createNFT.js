export const createNFT= `
import RewardNFT from 0x6a9a25c9d38fb9de

transaction (url:String){

  prepare(acct: AuthAccount) {
    acct.save(<-RewardNFT.createNFT(url: url),to: /storage/RewardNFTPath)
    acct.link<&RewardNFT.NFT{RewardNFT.NFTPublic}>(/public/RewardNFTPath, target: /storage/RewardNFTPath)


  }

  execute {
    log("NFT Created")
  }
}

`
