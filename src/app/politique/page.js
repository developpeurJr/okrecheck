"use client";
import React from "react";

export default function Confidentialite() {
  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Politique de confidentialité / Privacy Policy
      </h1>

      <p><strong>Dernière mise à jour / Last updated:</strong> Mai 2025 / May 2025</p>

      <h2 style={{ marginTop: "1.5rem" }}>1. Aucune collecte de données / No data collection</h2>
      <p>
        ErrorBete ne collecte, ne stocke ni ne transmet aucune donnée personnelle.
        Les textes que vous collez dans l’outil sont analysés localement, dans votre navigateur.
        Aucune information n’est envoyée à un serveur.
        <br />
        ErrorBete does not collect, store, or transmit any personal data.
        The texts you paste into the tool are analyzed locally, in your browser.
        No information is sent to a server.
      </p>

      <h2 style={{ marginTop: "1.5rem" }}>2. Pas de cookies / No cookies</h2>
      <p>
        Ce site n’utilise aucun cookie de suivi, ni outil d’analyse externe tel que Google Analytics.
        <br />
        This website does not use any tracking cookies or external analytics tools like Google Analytics.
      </p>

      <h2 style={{ marginTop: "1.5rem" }}>3. Sécurité / Security</h2>
      <p>
        Toutes les vérifications s’effectuent localement sur votre appareil. Aucune donnée ne quitte votre session.
        <br />
        All checks are done locally on your device. No data leaves your session.
      </p>

      <h2 style={{ marginTop: "1.5rem" }}>4. Contact / Contact</h2>
      <p>
        Pour toute question ou demande, vous pouvez nous contacter à :
        <br />
        <strong>📧 contact@errorbete.app</strong>
        <br />
        For any questions or requests, you can contact us at:
        <br />
        <strong>📧 contact@errorbete.app</strong>
      </p>
    </div>
  );
}
