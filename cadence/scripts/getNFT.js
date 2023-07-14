export const getNFT=`
import RewardNFT from 0x6a9a25c9d38fb9de

pub fun main(account: Address): AnyStruct {

    let publicReference = getAccount(account).getCapability(/public/RewardNFTPath).borrow<&RewardNFT.NFT{RewardNFT.NFTPublic}>()??panic("No NFT reference found!")
    return [publicReference.getID(),publicReference.getURL()]
  
  }

`