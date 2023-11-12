import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import {FaCloudUploadAlt} from "react-icons/fa";
import {IoArrowBackOutline} from "react-icons/io5";
import ImageUploader from '@/components/imageUploader'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>RoomGenius | Home</title>
        <meta name="description" content="Transform your space with RoomGenius, your go-to platform for personalized room recommendations. From stylish decor to functional furniture, discover curated suggestions tailored to your room's unique style. Elevate your living experience with expert guidance and innovative design insights. Start creating your dream space with RoomGenius today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ImageUploader />
      {/* <Header />
       <div className='main-scan-image'>

          <div className='container'>
            <div className='wrapper'>
              <div className='pda-s'>
                <h4>Scanner</h4>
                <p>Please provide information about your room so we can find the best products.</p>
              </div>

              <div className='msi-inside'>

                <div className='upload-image'>
                  <div className='icon'>
                    <FaCloudUploadAlt color='white' size={60}/>
                  </div>
                  <span>Upload a picture of your room</span>
                  <p>The image must be in png,jpg no bigger than 10MB
if you want example how image should look please <button>see this example</button></p>

                </div>

                <div className='budget-enter'>
                  <div className='tsxt-ew'>
                    <span>Enter your budget:</span>
                  </div>
                  <div className='pdsa-pdasaaa'>
                    <div className='dppsp'>
                      <label>From:</label>
                      <div className='pdsapdas'>
                        <div className='pdapdsa'>
                          <span>$</span>
                        </div>
                        <input placeholder='0'/>
                      </div>
                    </div>
                    <div className='dive-ralda'></div>
                    <div className='dppsp'>
                      <label>To:</label>
                      <div className='pdsapdas'>
                        <div className='pdapdsa'>
                          <span>$</span>
                        </div>
                        <input placeholder='1000'/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='more-details-etc'>

                  <div className='tsxt-ew'>
                    <span>Add additional details {'(optional):'}</span>
                  </div>
                  <input placeholder='I want a tree next to window and tv'/>
                </div>

              </div>

                <ImageUploader />

              <div className='safe-info'>
                <h3>Important!</h3>
                <p>Your information are safe and always will be. We ue encription when we process data only you can see your image and noone else, even and we.<br/> <br/>When we develop this model our main focus was to collect your information safty, to encrypt and to return results to you safety. Our priroyiti is sefity firs. <br/> <br/>When we develop this model our main focus was to collect your information safty, to encrypt and to return results to you safety. Our priroyiti is sefity firs. <br/> <br/>When we develop this model our main focus was to collect your information safty, to encrypt and to return results to you safety. Our priroyiti is sefity firs. </p>

              </div>
            </div>


          </div>
       </div>

       <div className='scan-next-step'>
        <div className='container'>
          <div className='wrapper'>
            <div className='dias-dapda'>
              <div className='bpspda'>
                <button className=''>
                  <div className='dpdapdpapp'>
                    <IoArrowBackOutline color='white' size={15}/>
                    <span>Back</span>
                  </div>
                </button>
              </div>

              <div className='bpspda saadppdappp'>
                <button className=''>
                  <div className='dpdapdpapp'>
                    <span>Next</span>
                    <IoArrowBackOutline color='white' size={15} style={{transform:'rotate(-180deg)', marginLeft:'2px'}}/>
                  </div>
                </button>
              </div>
            </div>

            
          </div>
        </div>
       </div> */}
    </>
  )
}
