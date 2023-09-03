import React from 'react';
import { useEffect } from 'react';
import SecondHeaderComponent from '../../components/SecondHeaderComponent/SecondHeaderComponent';
import './MaintenancePage.scss';
import oilChangeImage from '../../assets/oilchange.jpeg';
import tiresImage from '../../assets/tirechange.jpeg';
import brakePadsImage from '../../assets/brakechange.png';
import ModalComponent from '../../components/ModalComponent/ModalComponent';

function MaintenancePage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <section className="maintenance">
      <div className="maintenance__header">
        <SecondHeaderComponent />
      </div>
      <div className="maintenance__content">
        <div className="maintenance__title">
          <h1>Maintenance</h1>
        </div>
        <ul className="maintenance__information">
        <li>
  <ModalComponent
    imageSrc={oilChangeImage}
    title="Oil Change"
    content={
      <>
        <h3>Step-by-Step Guide: How to Change the Oil in Your Car</h3>
        <ol>
          <li>Park your car on a level surface and engage the parking brake.</li>
          <li>Gather the necessary tools: oil filter wrench, socket wrench, oil drain pan, new oil filter, and new oil.</li>
          <li>Locate the oil drain plug under your car's engine.</li>
          <li>Position the oil drain pan under the oil drain plug.</li>
          <li>Using a socket wrench, carefully loosen the oil drain plug and allow the old oil to drain into the pan.</li>
          <li>While the oil is draining, locate the oil filter. Use the oil filter wrench to remove the old oil filter.</li>
          <li>Before installing the new oil filter, apply a thin layer of new oil to the rubber gasket on the top.</li>
          <li>Install the new oil filter by hand, turning it until snug. Do not overtighten.</li>
          <li>Once the old oil has completely drained, replace the oil drain plug and tighten it with the socket wrench.</li>
          <li>Under the hood, locate the oil filler cap and remove it.</li>
          <li>Using a funnel, pour the recommended amount of new oil into the engine.</li>
          <li>Replace the oil filler cap.</li>
          <li>Start the engine and let it run for a few minutes to circulate the new oil.</li>
          <li>Turn off the engine and check the oil level using the dipstick. Add more oil if needed.</li>
          <li>Dispose of the old oil properly at a recycling center.</li>
        </ol>
        <p>
          Note: It's recommended to consult your car's owner manual for the specific oil type, oil filter, and oil capacity
          for your vehicle. If you're unsure about any step, consider seeking guidance from a professional mechanic.
        </p>
      </>
    }
  />
</li>

<li>
  <ModalComponent
    imageSrc={tiresImage}
    title="Tire Change"
    content={
      <>
        <h3>Step-by-Step Guide: How to Change a Flat Tire</h3>
        <ol>
          <li>Park your car on a flat, stable surface and engage the parking brake.</li>
          <li>Locate the spare tire, jack, and lug wrench in your car's trunk.</li>
          <li>Loosen the lug nuts on the flat tire slightly using the lug wrench. Do not remove them completely.</li>
          <li>Position the jack under the car's frame near the flat tire. Consult your owner's manual for the correct lifting points.</li>
          <li>Raise the car off the ground by using the jack. Ensure the car is stable and secure before continuing.</li>
          <li>Completely remove the lug nuts and pull the flat tire off the wheel hub.</li>
          <li>Align the holes on the spare tire with the wheel bolts and push the spare tire onto the wheel hub.</li>
          <li>Hand-tighten the lug nuts onto the wheel bolts.</li>
          <li>Lower the car back to the ground using the jack.</li>
          <li>Use the lug wrench to tighten the lug nuts in a crisscross pattern. Make sure they are securely fastened.</li>
          <li>Store the flat tire, jack, and lug wrench back in your car's trunk.</li>
        </ol>
        <p>
          Note: Once you've changed the tire, it's important to have the flat tire repaired or replaced as soon as possible.
          Follow your car's owner manual for specific instructions and consult a professional if you encounter any difficulties.
        </p>
      </>
    }
  />
</li>

<li>
  <ModalComponent
    imageSrc={brakePadsImage}
    title="Brake Pads Replacement"
    content={
      <>
        <h3>Step-by-Step Guide: How to Replace Brake Pads</h3>
        <ol>
          <li>Lift the car using a jack and secure it with jack stands.</li>
          <li>Remove the wheel to access the brake components.</li>
          <li>Locate the brake caliper. Remove the bolts holding the caliper in place and carefully lift it off the brake rotor.</li>
          <li>Slide out the old brake pads from the caliper bracket.</li>
          <li>Use a brake pad spreader tool or a C-clamp to compress the brake caliper piston back into its housing.</li>
          <li>Insert the new brake pads into the caliper bracket.</li>
          <li>Apply anti-squeal brake lubricant to the back of the brake pads.</li>
          <li>Reattach the brake caliper over the new brake pads and secure it with the bolts.</li>
          <li>Replace the wheel and tighten the lug nuts.</li>
          <li>Repeat the process for the other set of brake pads on the same axle.</li>
          <li>Lower the car and test the brakes in a safe area before driving.</li>
        </ol>
        <p>
          Note: Brake systems can be complex and crucial for safety. If you're not confident in your ability to replace brake pads, it's recommended to have this done by a professional mechanic.
        </p>
      </>
    }
  />
</li>

        </ul>
      </div>
    </section>
  );
}

export default MaintenancePage;
