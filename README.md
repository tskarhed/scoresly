# Scoresly

## Develop
Uses [Lume](https://lume.land/)as a static site generator.

### Prerequisites
- Install [Deno runtime](https://deno.com/): `curl -fsSL https://deno.land/install.sh | sh`

**Run to develop**

```
deno task lume --serve
```

**Build**

```
deno task lume
```

### Rendering sheet music

MusicXML support. Extracts metadata that is used by Lume. Rendered with OpenSheetMusicDisplay as SVG.

## Roadmap

### Stage 1

- [ ] MusicXML support, with playback
- [ ] Basic SVG and MIDI/wav/MP3 file support
- [ ] Mobile first layout and interaction
- [ ] Distribute somehow? Lume theme? Docker container that just spits out the HTML?

### Stage 2

- [ ] PDF support
- [ ] ABC notation support
- [ ] Custom themeing support
